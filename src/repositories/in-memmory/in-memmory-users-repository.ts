import { randomUUID } from "node:crypto";
import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class InMemmoryUsersRepository implements UsersRepository {
    public items: User[] = []

    async create(data: Prisma.UserCreateInput){
        const user = {
            id: randomUUID(),
            email: data.password,
            password: data.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.items.push(user)

        return user
    }
}