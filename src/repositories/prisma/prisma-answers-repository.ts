import { Answer } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { AnswersRepository } from "../answers-repository";

export class PrismaAnswersRepository implements AnswersRepository{
    async create(data: Answer){
        const answer = await prisma.answer.create({
            data
        })

        return answer
    }

    async findMany(questionId: string) {
        const answer = await prisma.answer.findMany({
            where:{
                questionId
            }
        })

        if(!answer){
            return null
        }

        return answer

    }
}