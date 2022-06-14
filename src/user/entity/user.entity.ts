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
@Entity('users')
export class User {

  /**
   * Primary key id
   */
  @PrimaryGeneratedColumn()
  user_id: number;

  /**
   * first name
   */
  @Column({ length: 100, nullable: false })
  first_name: string;

  /**
   * last name
   */
   @Column({ name: 'last_name', type:'varchar', length: 100, nullable: true })
   last_name: string;

  /**
   * email
   */
  @Unique('email', ['email'])
  @Column({ length: 255, nullable: false })
  email: string;

  /**
   * username
   */
   @Unique('username', ['email'])
   @Column({ length: 255, nullable: false })
   username: string;

  /**
   * password
   */
  @Exclude()
  @Column({ length: 100, nullable: false })
  password: string;

  /**
   * user activation status
   */
  @Column({ name: 'is_active', default: 1 })
  isActive: boolean;

  /**
   * newsletter status
   */
   @Column({ name: 'newsletter', default: 0 })
   newsletter: boolean;
 
   /**
   * banned status
   */
  @Column({ name: 'banned', type: 'tinyint', default: 0 })
  banned: boolean;   

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
