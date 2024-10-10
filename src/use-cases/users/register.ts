import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { hash } from "bcryptjs";
import { PasswordLengthError } from "../../errors/password-length-error";
import { UserAlreadyExistsError } from "../../errors/user-already-exists-error";

interface RegisterRequest extends Prisma.UserCreateInput{}

interface RegisterResponse {
    user: User
}

export class RegisterUseCase{
    constructor(private usersRepository: UsersRepository){}

    async execute({ email, password} : RegisterRequest) : Promise<RegisterResponse>{
        if(password.length < 8 || password.length > 14){
            throw new PasswordLengthError()
        }

        const passwordHash = await hash(password, 8)

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if(userWithSameEmail){
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.create({
            email,
            password: passwordHash
        })

        return { user } 

    }
}