import { Question } from "@prisma/client";

export interface QuestionProps{
    title: string
    stabeshimentId: string
}

export interface QuestionsRepository{
    create(data: QuestionProps): Promise<Question>
    findMany(stabelishimentId: string): Promise<Question[] | null>
}