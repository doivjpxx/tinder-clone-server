import { FindAllUserHandler } from './find-all';
import { UserFindByIdHandler } from './find-by-id';
import { FindHistoryUsersHandler } from './find-history-users';

export const UserQueryHandlers = [FindAllUserHandler, FindHistoryUsersHandler, UserFindByIdHandler];