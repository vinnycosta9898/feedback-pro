import { randomUUID } from "crypto";
import { QuestionsRepository } from "../questions-repository";
import { Question } from "@prisma/client";

export class InMemmoryQuestionsRepository implements QuestionsRepository{
    public items: Question[] = []

    async create(data: Question){
        const question = {
            id: randomUUID(),
            title: data.title,
            createdAt: new Date(),  
            updatedAt: new Date(),
            stabeshimentId: data.stabeshimentId
        }

        this.items.push(question)

        return question

    }

    async findMany(stabelishimentId: string){
        return this.items
        .filter((item) => item.stabeshimentId === stabelishimentId)
    }
}