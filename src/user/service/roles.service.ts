import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../entity/role.entity';

/**
 * User service
 */
@Injectable()
export class RoleService {

  /**
   * @ignore
   */
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  /**
   * create user
   */
  async createRole(userData: any ): Promise<Role> {
    const user    = new Role();
    user.name     = userData.role_name;
    try {
      return this.roleRepository.save(user);
    } catch (error) {
      // process email duplicate err msg
      if (error.code === 'ER_DUP_ENTRY') {
        throw new Error(`role already exists with name ${user.name}`);
      }

      throw error;
    }
  }
}
