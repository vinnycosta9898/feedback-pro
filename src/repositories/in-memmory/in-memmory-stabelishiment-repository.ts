import { Prisma, Stabeshiment } from "@prisma/client";
import { StabelishimentsReposity } from "../stabelishiment-repository";
import { randomUUID } from "crypto";

export class InMemmoryStabelishimentRepository implements StabelishimentsReposity{
    public items: Stabeshiment[] = []

    async create(data: Stabeshiment){
        const stabelishiment = {
            id: randomUUID(),
            name: data.name,
            cnpj: data.cnpj,
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: 'user-id'
        }

        this.items.push(stabelishiment)

        return stabelishiment
    }
}