import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsTo,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Category } from './category';
import { User } from './user';

@Table
export class Post extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  postId: string;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Category)
  @Column
  categoryId: string;

  @BelongsTo(() => Category)
  category: Category;

  @Column({ type: DataType.TEXT })
  content: Text

  @Column
  likes: number;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  tags: string[]
}
