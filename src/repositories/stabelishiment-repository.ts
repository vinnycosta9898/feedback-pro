import { Prisma, Stabeshiment } from "@prisma/client";

export interface StabelishimentProps{
    name: string
    cnpj: string
}


export interface StabelishimentsReposity{
    create(data: StabelishimentProps): Promise<StabelishimentProps>
}