import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../../use-cases/users/authenticate";

export function makeAuthenticateUser(){
    const usersRepository = new PrismaUsersRepository()

    const useCase = new AuthenticateUseCase(usersRepository)

    return useCase
}