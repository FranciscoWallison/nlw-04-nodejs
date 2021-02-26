import { MigrationInterface, QueryRunner, Table } from 'typeorm';


export class CreateUsers1614047185305 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: process.env.CONNECTION_DRIVE === 'mysql' ? "varchar" : 'uuid',
            default:  process.env.CONNECTION_DRIVE === 'mysql' ? `(UUID_TO_BIN(UUID(), TRUE))` : "NULL",
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
