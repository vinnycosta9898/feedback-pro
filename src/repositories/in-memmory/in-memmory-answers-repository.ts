import { randomUUID } from "node:crypto";
import { Answer, Prisma } from "@prisma/client";
import { AnswersRepository } from "../answers-repository";

export class InMemmoryAnswersRepository implements AnswersRepository{
    public items: Answer[] = []

    async create(data: Prisma.AnswerCreateInput){
        const answer = {
            id: randomUUID(),
            content: data.content,
            grade: data.grade,
            questionId: 'question-id'
        }

        this.items.push(answer)

        return answer
    }

    async findMany(questionId: string){
        return this.items.filter((item) => item.questionId === questionId)
    }
}