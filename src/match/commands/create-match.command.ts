import { CreateMatchRequest } from "../dto/request/create-match-request.dto";

export class CreateMatchCommand {
  constructor(public readonly createMatchRequest: CreateMatchRequest) { }
}
