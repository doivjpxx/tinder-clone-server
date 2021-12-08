import { CreateUserRequest } from "../dto/request/create-user-request.dto";

export class CreateUserCommand {
  constructor(public readonly createUserRequest: CreateUserRequest) { }
}
