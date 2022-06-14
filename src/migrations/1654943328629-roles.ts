import {MigrationInterface, QueryRunner} from "typeorm";

export class roles1654943328629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `roles` (`role_id` int(11) NOT NULL,`role_name` varchar(255) NOT NULL,PRIMARY KEY (`role_id`)) ENGINE=InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
