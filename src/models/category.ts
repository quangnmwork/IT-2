import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import { Post } from './post';

@Table
export class Category extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  categoryId: string;

  @Column
  categoryName: string;

  @HasMany(() => Post)
  posts: Post[];
}
