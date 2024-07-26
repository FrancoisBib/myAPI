import { Table, Column, PrimaryKey } from 'drizzle-orm/pg-core';

@Table('users')
export class User {
  @PrimaryKey()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
