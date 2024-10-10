import { hash } from 'bcryptjs'
import { beforeEach, describe, it, expect } from 'vitest'
import { InMemmoryUsersRepository } from '../../repositories/in-memmory/in-memmory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { ResourceNotFoundError } from '../../errors/resource-not-found-error'

let usersRepository: InMemmoryUsersRepository
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemmoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      email: 'johndoe@example.com',
      password: await hash('12345678', 6)
    })

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '12345678'
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    await usersRepository.create({
        email: 'johndoe@example.com',
        password: await hash('12345678', 6)
    })
  
    await expect(() =>
      sut.execute({
        email: 'john@example.com',
        password: '12345678'
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})