import { Question } from "@prisma/client";
import { QuestionProps, QuestionsRepository } from "../../repositories/questions-repository";

interface CreateQuestionRequest extends QuestionProps{}

interface CreateQuestionResponse {
    question: Question
}

export class CreateQuestionUsecase{
    constructor(private questionsRepository: QuestionsRepository){}

    async execute({ title } : CreateQuestionRequest) : Promise<CreateQuestionResponse>{
        if(title.length < 2 || title.length > 24){
            throw new Error("title has length between 2 and 24 caractheres")
        }

        const question = await this.questionsRepository.create({
            title
        })

        return {
            question
        }
    }
}