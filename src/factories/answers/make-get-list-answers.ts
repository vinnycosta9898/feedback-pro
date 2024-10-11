import { PrismaAnswersRepository } from "../../repositories/prisma/prisma-answers-repository";
import { GetListAnswersUseCase } from "../../use-cases/answers/get-list-answers";

export function makeGetListAnswers(){
    const answersRepository = new PrismaAnswersRepository()

    const useCase = new GetListAnswersUseCase(answersRepository)

    return useCase
}