import { CreateUserHandler } from './create-user.handler';
import { CreateUserCommand } from './create-user.command';

export const UserCommandHandlers = [
  CreateUserHandler,
  CreateUserCommand,
];
