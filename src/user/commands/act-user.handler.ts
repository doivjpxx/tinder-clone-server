import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { MatchFactory } from 'src/match/match.factory';
import { UserEntityRepository } from '../db/user-entity.repository';
import { ActUserCommand } from './act-user.command';

@CommandHandler(ActUserCommand)
export class ActUserHandler
  implements ICommandHandler<ActUserCommand> {
  constructor(
    private readonly userRepository: UserEntityRepository,
    private readonly matchFactory: MatchFactory,
    private readonly publiser: EventPublisher,
  ) { }

  async execute({ actUserCommand }: ActUserCommand): Promise<boolean> {
    const { userTargetId, actionRecId, userId } = actUserCommand;
    const currentUser = await this.userRepository.findOneById(userId);
    const match = this.publiser.mergeObjectContext(
      await this.matchFactory.create(currentUser.getRecId(), actionRecId, userTargetId),
    );

    match.commit();

    return true;
  }
}
