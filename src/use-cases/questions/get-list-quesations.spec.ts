import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryQuestionsRepository } from "../../repositories/in-memmory/in-memmory-questions-repository";
import { GetListQuestionsUseCase } from "./get-list-questions";

let questionsRepository: InMemmoryQuestionsRepository
let sut: GetListQuestionsUseCase

describe("Get list question test", () => {
    beforeEach(() => {
        questionsRepository = new InMemmoryQuestionsRepository()
        sut = new GetListQuestionsUseCase(questionsRepository)
    })

    it('should be able to get list questions', async () => {
        await questionsRepository.create({
            title: 'How was the service today?',
            stabeshimentId: 'user-id'
        })

        await questionsRepository.create({
            title: 'How was the experience today?',
            stabeshimentId: 'user-id'
        })
        
        const { questions } = await sut.execute({
            stabelishimentId: 'user-id'
        }) 

        expect(questions).toHaveLength(2)
    })
})