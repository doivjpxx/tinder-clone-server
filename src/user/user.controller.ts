import { Body, Controller, Get, Param, Post, Req, UseInterceptors } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { HeadersInterceptor } from 'src/app.intercept';
import { CreateUserRequest } from './dto/request/create-user-request.dto';
import { FindAllUserQuery } from './queries/find-all';
import { FindByIdQuery } from './queries/find-by-id';
import { FindHistoryUsersQuery } from './queries/find-history-users';
import { UserDto } from './user.dto';

@Controller('users')
@UseInterceptors(new HeadersInterceptor())
export class UserController {
  constructor(
    private readonly queryBus: QueryBus,
  ) { }

  @Get('history')
  async getUsersHistory(@Req() req): Promise<any[]> {
    return this.queryBus.execute<FindHistoryUsersQuery, any[]>(new FindHistoryUsersQuery(req.headers['user-id']));
  }

  @Get(':id')
  async getUser(@Param('id') userId: string): Promise<void> {
    return this.queryBus.execute<FindByIdQuery, any>(new FindByIdQuery(userId));
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