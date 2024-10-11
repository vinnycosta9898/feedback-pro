import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryAnswersRepository } from "../../repositories/in-memmory/in-memmory-answers-repository";
import { GetListAnswersUseCase } from "./get-list-answers";

let answersRepository: InMemmoryAnswersRepository
let sut: GetListAnswersUseCase

describe("Get list answers test", () => {
    beforeEach(() => {
        answersRepository = new InMemmoryAnswersRepository
        sut = new GetListAnswersUseCase(answersRepository)
    })

    it("should be able to get list answers by questionId", async () => {
        await answersRepository.create({
            content: 'Excellent',
            grade: 100,
        })

        const { answers } = await sut.execute({
            questionId: 'question-id'
        })

        expect(answers).toHaveLength(1)
    })
})