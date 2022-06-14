import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Unique } from 'typeorm';
import { Exclude } from 'class-transformer';

/**
 * User entity
 */
@Entity('user_roles')
export class UserRoles {

  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn()
  user_role_id: number;

  /**
   * user id
   */
  @Column({ nullable: false })
  user_id: number;

  /**
   * role id
   */
   @Column({ nullable: false })
   role_id: number;

  
  /**
   * created at
   */
  @Exclude()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  /**
   * updated at
   */
  @Exclude()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
