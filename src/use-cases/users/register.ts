import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../../repositories/users-repository";
import { hash } from "bcryptjs";

interface RegisterRequest extends Prisma.UserCreateInput{}

interface RegisterResponse {
    user: User
}

export class RegisterUseCase{
    constructor(private usersRepository: UsersRepository){}

    async execute({ ...props } : RegisterRequest) : Promise<RegisterResponse>{
        if(props.password.length < 8 || props.password.length > 14){
            throw new Error("Password has length between 8 and 14 caractheres")
        }

        const passwordHash = await hash(props.password, 8)

        const userWithSameEmail = await this.usersRepository.findByEmail(props.email)

        if(userWithSameEmail){
            throw new Error("User already exists with same email")
        }

        const user = await this.usersRepository.create({
            email: props.email,
            password: passwordHash
        })

        return { user }

    }
}