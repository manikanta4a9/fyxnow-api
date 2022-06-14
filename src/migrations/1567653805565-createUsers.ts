import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsers1567653805565 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`user_id` int(11) NOT NULL AUTO_INCREMENT,`first_name` varchar(255) NOT NULL,`last_name` varchar(255) NOT NULL,`username` varchar(255) NOT NULL,`password` varchar(255) NOT NULL,`email` varchar(255) NOT NULL,`newsletter` tinyint(1) NOT NULL DEFAULT '0',`banned` tinyint(1) NOT NULL DEFAULT '0',`signup_ip` varchar(255) DEFAULT NULL,`activation_key` varchar(255) NOT NULL,`resetpassword_key` varchar(255) DEFAULT NULL,`status` tinyint(1) DEFAULT '1',`created_by` int(11) DEFAULT NULL,`updated_by` int(11) DEFAULT NULL,PRIMARY KEY (`user_id`),UNIQUE KEY `username_UNIQUE` (`username`),UNIQUE KEY `email_UNIQUE` (`email`)) ENGINE=InnoDB AUTO_INCREMENT=8;"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
