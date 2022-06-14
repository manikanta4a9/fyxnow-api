import {MigrationInterface, QueryRunner} from "typeorm";

export class rolesData1654945163215 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `roles`CHANGE `role_id` `role_id` int NOT NULL AUTO_INCREMENT FIRST;")
        await queryRunner.query("INSERT INTO `roles` (`role_name`) VALUES ('admin');")
        await queryRunner.query("INSERT INTO `roles` (`role_name`) VALUES ('customer');")
        await queryRunner.query("INSERT INTO `roles` (`role_name`) VALUES ('merchant');")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
