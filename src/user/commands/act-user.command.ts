import { UserActRequest } from "../dto/request/act-user-quest.dto";

export class ActUserCommand {
  constructor(public readonly actUserCommand: UserActRequest) { }
}
