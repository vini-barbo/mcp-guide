import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
  }
}