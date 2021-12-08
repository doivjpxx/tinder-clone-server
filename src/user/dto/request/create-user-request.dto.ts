export class CreateUserRequest {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  avatar: string;
  recId?: number;
}