import { CreateMatchCommand } from '../../match/commands/create-match.command';
import { CreateMatchHandler } from './create-match.handler';

export const MatchCommandHandlers = [
  CreateMatchCommand,
  CreateMatchHandler,
];
