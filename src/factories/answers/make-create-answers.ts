import { PrismaAnswersRepository } from "../../repositories/prisma/prisma-answers-repository";
import { CreateAnswerUseCase } from "../../use-cases/answers/create-answer";

export function makeCreateAnswers(){
    const answersRepository = new PrismaAnswersRepository()

    const useCase = new CreateAnswerUseCase(answersRepository)

    return useCase
}