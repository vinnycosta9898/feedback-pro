import { Prisma, Question } from "@prisma/client";

export interface QuestionsRepository{
    create(data: Question): Promise<Question>
    findMany(stabelishimentId: string): Promise<Question[] | null>
}