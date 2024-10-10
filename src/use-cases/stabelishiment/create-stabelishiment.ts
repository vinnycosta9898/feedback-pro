import { Prisma } from "@prisma/client";
import { StabelishimentProps, StabelishimentsReposity } from "../../repositories/stabelishiment-repository";

interface CreateStabelishimentRequest extends Prisma.StabeshimentCreateInput{}

type CreateStabelishimentResponse = StabelishimentProps

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
        
        return stabelishiment
    }
}