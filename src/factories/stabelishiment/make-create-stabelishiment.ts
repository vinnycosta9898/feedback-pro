import { InMemmoryStabelishimentRepository } from "../../repositories/in-memmory/in-memmory-stabelishiment-repository";
import { CreateStabelishimentUseCase } from "../../use-cases/stabelishiment/create-stabelishiment";

export function makeCreateStabelishiment(){
    const stabelishimentsRepository = new InMemmoryStabelishimentRepository()

    const useCase = new CreateStabelishimentUseCase(stabelishimentsRepository)

    return useCase
}