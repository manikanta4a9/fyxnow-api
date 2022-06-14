import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoles } from '../entity/user_roles.entity';
import { User } from '../entity/user.entity';

/**
 * User service
 */
@Injectable()
export class UserRolesService {

  /**
   * @ignore
   */
  constructor(
    @InjectRepository(UserRoles)
    private readonly userRolesRepository: Repository<UserRoles>,
  ) {}

  /**
   * create user
   */
  async createUserRoles(userData: User ): Promise<UserRoles> {
    const user    = new UserRoles();
    // user.role_id     = userData.role_id;
    user.role_id = 2
    user.user_id = userData.user_id
    try {
      return this.userRolesRepository.save(user);
    } catch (error) {
      // process email duplicate err msg
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error(`role already exists with name ${user.user_id}`);
      }

      throw error;
    }
  }
}
