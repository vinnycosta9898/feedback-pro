import { Prisma, Stabeshiment } from "@prisma/client";
import { StabelishimentsReposity } from "../../repositories/stabelishiment-repository";

interface CreateStabelishimentRequest extends Prisma.StabeshimentCreateInput{}

interface CreateStabelishimentResponse {
    stabelishiment: Stabeshiment
}

export class CreateStabelishimentUseCase{
    constructor(private stabelishimentsRepository: StabelishimentsReposity){}

    async execute({ name, cnpj } : CreateStabelishimentRequest): Promise<CreateStabelishimentResponse>{
        if(name.length < 2 || name.length > 24){
            throw new Error("Stabelishiment name have a between 2 and 24 caractheres")
        }

        const stabelishiment = await this.stabelishimentsRepository.create({
            name,
            cnpj,
        })
        
        return {
            stabelishiment
        }
    }
}