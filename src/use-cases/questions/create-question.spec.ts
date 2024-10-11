import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryQuestionsRepository } from "../../repositories/in-memmory/in-memmory-questions-repository";
import { CreateQuestionUseCase } from "./create-question";
import { TitleQuestionLengthError } from "../../errors/title-question-length-error";

let questionsRepository: InMemmoryQuestionsRepository
let sut: CreateQuestionUseCase

describe("Create question test", () => {
    beforeEach(() => {
        questionsRepository = new InMemmoryQuestionsRepository()
        sut = new CreateQuestionUseCase(questionsRepository)
    })

    it("should be able to create a question", async () => {
        const { question } = await sut.execute({
            title: 'How was the exeprience today?',
            stabeshimentId: 'user-id'
        })

        expect(question.title).toEqual(expect.any(String))
    })

    it('should not be able to create a question with less 2 cacarchteres', async () => {
        await expect(() =>  
            sut.execute({
                title: 'x',
                stabeshimentId: 'user-id'
        })).rejects.toBeInstanceOf(TitleQuestionLengthError)
    })
})