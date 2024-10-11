import { Answer } from "@prisma/client";

export interface AnswerProps{
    content: string
    grade: number
}

export interface AnswersRepository{
    create(data: AnswerProps): Promise<Answer>
}