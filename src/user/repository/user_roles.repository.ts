import { Repository, EntityRepository } from 'typeorm';
import { UserRoles } from '../entity/user_roles.entity';

/**
 * User repository class
 */
@EntityRepository(UserRoles)
export class UserRolesRepository extends Repository<UserRoles> {}
