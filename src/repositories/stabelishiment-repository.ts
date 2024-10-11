import { Prisma, Stabeshiment } from "@prisma/client"

export interface StabelishimentsReposity{
    create(data: Prisma.StabeshimentCreateInput): Promise<Stabeshiment>
}