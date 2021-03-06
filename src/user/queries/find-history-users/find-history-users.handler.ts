import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ActionEntityRepository } from 'src/action/db/action-entity.repository';
import { MatchDtoRepository } from 'src/match/db/match-dto.repository';
import { UserDtoRepository } from 'src/user/db/user-dto.repository';
import { UserEntityRepository } from 'src/user/db/user-entity.repository';
import { FindHistoryUsersQuery } from './find-history-users.query';

@QueryHandler(FindHistoryUsersQuery)
export class FindHistoryUsersHandler implements IQueryHandler<FindHistoryUsersQuery> {
  constructor(
    private readonly userRepository: UserEntityRepository,
    private readonly userDtoRepository: UserDtoRepository,
    private readonly matchDtoRepository: MatchDtoRepository,
    private readonly actionRepository: ActionEntityRepository,
  ) { }

  async execute({ userId }): Promise<any[]> {
    const currentUser = await this.userRepository.findOneById(String(userId));
    const actions = await this.actionRepository.findAll();
    const historyData = await this.matchDtoRepository.findByRecId(currentUser.getRecId());
    const users = await this.userDtoRepository.find({ recId: { $in: historyData.map(p => p.matchWith) } });
    const response = await Promise.all(historyData.map(data => {
      return {
        recId: data.recId,
        matched: users.find(u => u.recId === data.matchWith)?.firstName,
        currentUser: currentUser.getFirstName(),
        action: actions.find(i => i.getRecId() === data.action).getType(),
      };
    }))
    return response;
  }
}
