import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MatchDtoRepository } from 'src/match/db/match-dto.repository';
import { UserEntityRepository } from 'src/user/db/user-entity.repository';
import { FindByIdQuery } from './find-by-id.query';

@QueryHandler(FindByIdQuery)
export class UserFindByIdHandler implements IQueryHandler<FindByIdQuery> {
  constructor(
    private readonly userRepository: UserEntityRepository,
    private readonly matchDtoRepository: MatchDtoRepository,
  ) { }

  async execute({ userId }): Promise<any[]> {
    const currentUser = await this.userRepository.findOneById(userId);
    const historyData = await this.matchDtoRepository.findByIndex(currentUser.getIndex());
    return historyData;
  }
}
