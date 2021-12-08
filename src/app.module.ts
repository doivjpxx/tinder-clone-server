import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { MatchModule } from './match/match.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, MatchModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
