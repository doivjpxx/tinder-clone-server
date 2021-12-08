import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { MatchFactory } from '../../match/match.factory';
import { CreateMatchCommand } from './create-match.command';

@CommandHandler(CreateMatchCommand)
export class CreateMatchHandler
  implements ICommandHandler<CreateMatchCommand> {
  constructor(
    private readonly matchFactory: MatchFactory,
    private readonly eventPublisher: EventPublisher,
  ) { }

  async execute({ createMatchRequest }: CreateMatchCommand): Promise<void> {
    const { index, action, matchWith } = createMatchRequest;
    const match = this.eventPublisher.mergeObjectContext(
      await this.matchFactory.create(index, action, matchWith),
    );
    match.commit();
  }
}
