import { PrismaStabelishimentRepository } from "../../repositories/prisma/prisma-stabelishiment-repository";
import { CreateStabelishimentUseCase } from "../../use-cases/stabelishiment/create-stabelishiment";

export function makeCreateStabelishiment(){
    const stabelishimentsRepository = new PrismaStabelishimentRepository()

    const useCase = new CreateStabelishimentUseCase(stabelishimentsRepository)

    return useCase
}