import { Question } from "@prisma/client";
import { QuestionProps, QuestionsRepository } from "../../repositories/questions-repository";
import { TitleQuestionLengthError } from "../../errors/title-question-length-error";

interface CreateQuestionRequest extends QuestionProps{}

interface CreateQuestionResponse {
    question: Question
}

export class CreateQuestionUseCase{
    constructor(private questionsRepository: QuestionsRepository){}

    async execute({ title, stabeshimentId } : CreateQuestionRequest) : Promise<CreateQuestionResponse>{
        if(title.length < 2 || title.length > 256){
            throw new TitleQuestionLengthError()
        }

        const question = await this.questionsRepository.create({
            title,
            stabeshimentId
        })

        return {
            question
        }
    }
}