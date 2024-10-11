import { randomUUID } from "node:crypto";
import { Prisma, Stabeshiment } from "@prisma/client";
import { StabelishimentsReposity } from "../stabelishiment-repository";

export class InMemmoryStabelishimentRepository implements StabelishimentsReposity{
    public items: Stabeshiment[] = []

    async create(data: Prisma.StabeshimentCreateInput ){
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