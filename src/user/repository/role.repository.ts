import { Repository, EntityRepository } from 'typeorm';
import { Role } from '../entity/role.entity';

/**
 * User repository class
 */
@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {}
