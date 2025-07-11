import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { UpdateUserDto } from '../../dto/user/update-user.dto';
import { UserResponseDto } from '../../dto/user/user-response.dto';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    return new UserResponseDto(updatedUser);
  }
}