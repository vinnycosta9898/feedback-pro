import { beforeEach, describe, expect, it } from "vitest";
import { InMemmoryUsersRepository } from "../../repositories/in-memmory/in-memmory-users-repository";
import { GetUserProfileUseCase } from "./get-list-user-profile";
import { hash } from "bcryptjs";

let usersRepository: InMemmoryUsersRepository
let sut: GetUserProfileUseCase

describe("Get user profile test", () => {
    beforeEach(() => {
        usersRepository = new InMemmoryUsersRepository()
        sut = new GetUserProfileUseCase(usersRepository)
    })

    it('should be able to get user profile', async () => {
        const createdUser = await usersRepository.create({
            email: 'johndoe@example.com',
            password: await hash("12345678", 6)
        })

        const { user } = await sut.execute({
            userId: createdUser.id
        })

        expect(user.id).toEqual(expect.any(String))
    })
})