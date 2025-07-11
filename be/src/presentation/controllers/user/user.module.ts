import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from '../../../application/services/user.service';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UserRepositoryImpl } from '../../../infrastructure/database/repositories/user.repository.impl';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}