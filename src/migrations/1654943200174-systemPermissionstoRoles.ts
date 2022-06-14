import {MigrationInterface, QueryRunner} from "typeorm";

export class systemPermissionstoRoles1654943200174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `system_permission_to_roles` (`system_permission_to_roles_id` int(11) NOT NULL,`role_id` int(11) NOT NULL,`permission_id` int(11) NOT NULL,PRIMARY KEY (`system_permission_to_roles_id`)) ENGINE=InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
