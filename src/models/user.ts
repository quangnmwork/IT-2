import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  userID: string;

  @Column
  @Unique
  email: string;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  avatar: string;

  @Column
  location: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column
  isAdmin: boolean;
}
