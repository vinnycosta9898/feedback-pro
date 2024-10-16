import { Answer, Prisma } from "@prisma/client";
import { AnswersRepository } from "../../repositories/answers-repository";

interface CreateAnswerRequest extends Prisma.AnswerCreateInput{}

interface CreateAnswerResponse {
    answer: Answer
}

export class CreateAnswerUseCase{
    constructor(private answersRepository: AnswersRepository){}

    async execute({content, grade} : CreateAnswerRequest) : Promise<CreateAnswerResponse>{
        if(content.length < 2 || content.length > 256){
            throw new Error("Content has length between 2 and 256 caractheres")
        }

        const answer = await this.answersRepository.create({
            content,
            grade,
        })

        return {
            answer
        }
    }
}