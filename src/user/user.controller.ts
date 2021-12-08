import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { FindAllUserQuery } from './queries/find-all';
import { FindHistoryUsersQuery } from './queries/find-history-users';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
  ) { }

  @Get('history/:id')
  async getUsersHistory(@Param('id') userId: string): Promise<any[]> {
    return this.queryBus.execute<FindHistoryUsersQuery, any[]>(new FindHistoryUsersQuery(userId));
  }

  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<void> {
    // return await this.userDtoRepository.findById(userId);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.queryBus.execute<FindAllUserQuery, UserDto[]>(new FindAllUserQuery());
  }

  @Post()
  async createUser(
    @Body() createUser: CreateUserRequest,
  ): Promise<void> { }
}