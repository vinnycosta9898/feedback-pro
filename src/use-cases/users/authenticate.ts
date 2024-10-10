import { User } from "@prisma/client"
import { UsersRepository } from "../../repositories/users-repository"
import { ResourceNotFoundError } from "../../errors/resource-not-found-error"
import { compare } from "bcryptjs"
import { CredentialsInvalidError } from "../../errors/credentials-invalid-error"

interface AuthenticateRequest{
    email: string
    password: string
}

interface AuthenticateResponse{
    user: User
}

export class AuthenticateUseCase{
    constructor(private usersRepository: UsersRepository){}

    async execute({ email, password } : AuthenticateRequest) : Promise<AuthenticateResponse>{
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new ResourceNotFoundError()
        }

        const doesPasswordMatch = await compare(password, user.password)

        if(!doesPasswordMatch){
            throw new CredentialsInvalidError()
        }

        return {
            user
        }
    }
}