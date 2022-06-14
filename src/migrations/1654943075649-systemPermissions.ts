import {MigrationInterface, QueryRunner} from "typeorm";

export class systemPermissions1654943075649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `system_permissions` (`permission_id` int(11) NOT NULL,`permission_name` varchar(255) DEFAULT NULL,PRIMARY KEY (`permission_id`)) ENGINE=InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
