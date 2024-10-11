import { Answer } from "@prisma/client";

export interface AnswerProps{
    id: string
    content: string
    grade: number
    questionId: string
}

export interface AnswersRepository{
    create(data: AnswerProps): Promise<Answer>
}