import { CreateUserHandler } from './create-user.handler';
import { CreateUserCommand } from './create-user.command';
import { ActUserCommand } from './act-user.command';
import { ActUserHandler } from './act-user.handler';

export const UserCommandHandlers = [
  CreateUserHandler,
  CreateUserCommand,
  ActUserCommand,
  ActUserHandler
];
