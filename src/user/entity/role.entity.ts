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
@Entity('roles')
export class Role {

  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn()
  role_id: number;

  /**
   * role name
   */
  @Column({ length: 100, nullable: false })
  name: string;

  
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
