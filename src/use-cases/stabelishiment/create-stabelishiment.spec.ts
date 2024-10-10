import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryStabelishimentRepository } from "../../repositories/in-memmory/in-memmory-stabelishiment-repository";
import { CreateStabelishimentUseCase } from "./create-stabelishiment";

let stabelishimentsRepository: InMemmoryStabelishimentRepository
let sut: CreateStabelishimentUseCase

describe("Create stabelishiment test", () => {
    beforeEach(() => {
        stabelishimentsRepository= new InMemmoryStabelishimentRepository()
        sut = new CreateStabelishimentUseCase(stabelishimentsRepository)
    })

    it("Should be able to create a stabelishiment", async () => {
       const stabelishiment = await sut.execute({
            name: 'John doe store',
            cnpj: '123.456.789-10'
        })

        expect(stabelishiment.name).toEqual(expect.any(String))
    })
})