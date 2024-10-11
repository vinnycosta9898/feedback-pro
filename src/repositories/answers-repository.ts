import { Answer, Prisma } from "@prisma/client";

export interface AnswersRepository{
    create(data: Prisma.AnswerCreateInput): Promise<Answer>
    findMany(questionId: string): Promise<Answer[] | null>
}