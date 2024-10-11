import { Question } from "@prisma/client";
import { QuestionsRepository } from "../questions-repository";
import { prisma } from "../../lib/prisma";

export class PrismaQuestionsRepository implements QuestionsRepository{
    async create(data: Question){
        const question  = await prisma.question.create({
            data
        })

        return question
    }

    async findMany(stabelishimentId: string){
        const question = await prisma.question.findMany({
            where:{
                stabeshimentId: stabelishimentId
            }
        })

        if(!question){
            return null
        }

        return question
    }
}