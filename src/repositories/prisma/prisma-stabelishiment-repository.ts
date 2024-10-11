import { Prisma } from "@prisma/client";
import { StabelishimentsReposity } from "../stabelishiment-repository";
import { prisma } from "../../lib/prisma";

export class PrismaStabelishimentRepository implements StabelishimentsReposity{
    async create(data: Prisma.StabeshimentCreateInput){
        const stabelishiment = await prisma.stabeshiment.create({
            data
        })

        return stabelishiment
    }
}