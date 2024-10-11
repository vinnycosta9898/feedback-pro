import { Answer } from "@prisma/client";

export interface AnswersRepository{
    create(data: Answer): Promise<Answer>
    findMany(questionId: string): Promise<Answer[] | null>
}