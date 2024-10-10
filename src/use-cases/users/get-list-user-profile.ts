import { User } from "@prisma/client"
import { UsersRepository } from "../../repositories/users-repository"
import { ResourceNotFoundError } from "../../errors/resource-not-found-error"

interface GetListUserProfileRequest{
    userId: string
}

interface GetListUserProfileResponse{
    user: User
}

export class GetUserProfileUseCase{
    constructor(private usersrepository: UsersRepository){}

    async execute({ userId } : GetListUserProfileRequest) : Promise<GetListUserProfileResponse>{
        const user = await this.usersrepository.findById(userId)

        if(!user){
            throw new ResourceNotFoundError()
        }

        return {
            user
        }
    }
}