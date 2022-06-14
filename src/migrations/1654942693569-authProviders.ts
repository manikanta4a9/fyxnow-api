import {MigrationInterface, QueryRunner} from "typeorm";

export class authProviders1654942693569 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `authentication_providers` (`authentication_providers_id` int(11) NOT NULL,`provider_key` varchar(255) NOT NULL,`user_id` int(11) NOT NULL,`provider_type` varchar(45) NOT NULL,PRIMARY KEY (`authentication_providers_id`)) ENGINE=InnoDB;")
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
