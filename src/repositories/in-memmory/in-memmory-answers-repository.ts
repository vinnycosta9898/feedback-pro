import { randomUUID } from "node:crypto";
import { Answer } from "@prisma/client";
import { AnswerProps, AnswersRepository } from "../answers-repository";

export class InMemmoryAnswersRepository implements AnswersRepository{
    public items: Answer[] = []

    async create(data: AnswerProps){
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