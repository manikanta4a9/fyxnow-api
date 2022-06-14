import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserService } from './service/user.service';
import { UserRolesService } from './service/user_roles.service';
import { UserRepository } from './repository/user.repository';
import { UserRolesRepository } from './repository/user_roles.repository';
import { UserController } from './controller/user/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserRepository,
      UserRolesRepository
    ]),
  ],
  exports: [
    UserService,
    UserRolesService
  ],
  providers: [
    UserService,
    UserRolesService
  ],
  controllers: [UserController],
})
export class UserModule {}
