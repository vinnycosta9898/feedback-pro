import { Prisma, Question } from "@prisma/client";

export interface QuestionProps{
    title: string
}

export interface QuestionsRepository{
    create(data: QuestionProps): Promise<Question>
}