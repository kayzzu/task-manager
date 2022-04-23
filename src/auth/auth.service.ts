import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async signUp(authCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }
}
