import { InMemmoryQuestionsRepository } from "../../repositories/in-memmory/in-memmory-questions-repository";
import { PrismaQuestionsRepository } from "../../repositories/prisma/prisma-questions-repository";
import { CreateQuestionUseCase } from "../../use-cases/questions/create-question";

export function makeCreateQuestions(){
    const questionsRepository = new PrismaQuestionsRepository()
    
    const useCase = new CreateQuestionUseCase(questionsRepository)

    return useCase
}