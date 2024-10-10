import { beforeEach, describe, expect, it } from 'vitest'
import { InMemmoryUsersRepository } from '../../repositories/in-memmory/in-memmory-users-repository'
import { RegisterUseCase } from './register'
import { PasswordLengthError } from '../../errors/password-length-error'

let usersRepository: InMemmoryUsersRepository
let sut : RegisterUseCase

describe('Register test', () => {
    beforeEach(() => {
        usersRepository = new InMemmoryUsersRepository()
        sut = new RegisterUseCase(usersRepository)
    })

    it('should be able register user', async () => {
        const { user } = await sut.execute({
            email: 'johndoe@example.com',
            password: '12345678'
        })

        expect(user.id).toEqual(expect.any(String))
    })

    it('should not be able to register with password less 8 carchres or more 14 caractheres', async () => {
        await expect(() => sut.execute({
            email: 'johndoe@example.com',
            password: '123456'
        })).rejects.toBeInstanceOf(PasswordLengthError)
    })
})