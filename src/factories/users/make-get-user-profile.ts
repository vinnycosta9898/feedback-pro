import { PrismaUsersRepository } from "../../repositories/prisma/prisma-users-repository";
import { GetUserProfileUseCase } from "../../use-cases/users/get-list-user-profile";

export function makeGetUserProfile(){
    const usersRepository = new PrismaUsersRepository()

    const useCase = new GetUserProfileUseCase(usersRepository)

    return useCase
}