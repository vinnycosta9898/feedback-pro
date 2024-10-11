import { Answer } from "@prisma/client"
import { AnswersRepository } from "../../repositories/answers-repository"

interface GetListAnswersRequest{
    questionId: string
}

interface GetListAnswersResponse{
    answers: Answer[] | null
}

export class GetListAnswersUseCase{
    constructor(private answersRepository: AnswersRepository){}

    async execute({ questionId } : GetListAnswersRequest) : Promise<GetListAnswersResponse>{
        const answers = await this.answersRepository.findMany(questionId)

        if(!answers){
            throw new Error("Answer list is empyt")
        }

        return {
            answers
        }
    }
}