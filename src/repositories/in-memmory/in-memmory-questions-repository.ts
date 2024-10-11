import { randomUUID } from "crypto";
import { QuestionProps, QuestionsRepository } from "../questions-repository";
import { Question } from "@prisma/client";

export class InMemmoryQuestionsRepository implements QuestionsRepository{
    public items: Question[] = []

    async create(data: QuestionProps){
        const question = {
            id: randomUUID(),
            title: data.title,
            stabeshimentId: data.stabeshimentId,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.items.push(question)

        return question

    }

    async findMany(stabelishimentId: string){
        return this.items
        .filter((item) => item.stabeshimentId === stabelishimentId)
    }
}