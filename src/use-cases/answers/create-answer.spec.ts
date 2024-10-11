import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryAnswersRepository } from "../../repositories/in-memmory/in-memmory-answers-repository";
import { CreateAnswerUseCase } from "./create-answer";
import { InMemmoryQuestionsRepository } from "../../repositories/in-memmory/in-memmory-questions-repository";
import { GetListQuestionsUseCase } from "../questions/get-list-questions";

let answersRepository: InMemmoryAnswersRepository
let sut: CreateAnswerUseCase

describe("Create answer test", () => {
    beforeEach(() => {
        answersRepository = new InMemmoryAnswersRepository
        sut = new CreateAnswerUseCase(answersRepository)
    })

    it('should be able to reply a question with answer', async () => {
       const { answer } = await sut.execute({
            content: 'Excellent',
            grade: 100
       })

       expect(answer.content).toEqual(expect.any(String))
    })
})