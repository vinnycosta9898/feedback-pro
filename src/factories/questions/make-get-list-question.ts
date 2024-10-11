import { PrismaQuestionsRepository } from "../../repositories/prisma/prisma-questions-repository";
import { GetListQuestionsUseCase } from "../../use-cases/questions/get-list-questions";

export function makeGetListQuestions(){
    const questionsRepository = new PrismaQuestionsRepository()
    
    const useCase = new GetListQuestionsUseCase(questionsRepository)

    return useCase
}