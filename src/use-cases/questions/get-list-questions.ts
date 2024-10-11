import { Question } from "@prisma/client"
import { QuestionsRepository } from "../../repositories/questions-repository"

interface GetListQuestionsRequest{
    stabelishimentId: string
}

interface GetListQuestionsResponse{
    questions: Question[] | null
}

export class GetListQuestionsUseCase{
    constructor(private questionsrepository: QuestionsRepository){}

    async execute({ stabelishimentId } : GetListQuestionsRequest) : Promise<GetListQuestionsResponse>{
        const questions = await this.questionsrepository.findMany(stabelishimentId)

        if(!questions){
            throw new Error("Question list empyt")
        }

        return {
            questions
        }
    }
}