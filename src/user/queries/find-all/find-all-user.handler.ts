import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserEntityRepository } from 'src/user/db/user-entity.repository';
import { UserDto } from 'src/user/user.dto';
import { FindAllUserQuery } from './find-all-user.query';

@QueryHandler(FindAllUserQuery)
export class FindAllUserHandler implements IQueryHandler<FindAllUserQuery> {
  constructor(private readonly userRepository: UserEntityRepository) { }

  async execute(): Promise<any[]> {
    return await this.userRepository.findAll();
  }
}
