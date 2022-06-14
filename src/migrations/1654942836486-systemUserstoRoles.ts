import {MigrationInterface, QueryRunner} from "typeorm";

export class systemUserstoRoles1654942836486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `system_users_to_roles` (`system_users_to_roles_id` int(11) NOT NULL,`user_id` int(11) NOT NULL,`role_id` int(11) NOT NULL,PRIMARY KEY (`system_users_to_roles_id`)) ENGINE=InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
