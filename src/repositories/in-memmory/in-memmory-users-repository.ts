import { randomUUID } from "node:crypto";
import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemmoryUsersRepository implements UsersRepository {
    public items: User[] = []

    async create(data: Prisma.UserCreateInput){
        const user = {
            id: randomUUID(),
            email: data.email,
            password: data.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.items.push(user)

        return user
    }

    async findByEmail(email: string){
        const user = this.items.find((item) => item.email === email)

        if(!user){
            return null
        }

        return user
    }

    async findById(userId: string){
        const user = this.items.find((item) => item.id === userId)

        if(!user){
            return null
        }

        return user
    }
    
}