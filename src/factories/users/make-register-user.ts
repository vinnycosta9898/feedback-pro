import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { RegisterUseCase } from "../../use-cases/users/register";

export function makeCreateUser(){
    const usersRepository = new PrismaUsersRepository()

    const useCase = new RegisterUseCase(usersRepository)

    return useCase
}