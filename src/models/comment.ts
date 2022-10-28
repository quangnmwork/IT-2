import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  Unique,
  BelongsTo,
  ForeignKey,
  CreatedAt,
} from 'sequelize-typescript';
import { Post } from './post';
import { User } from './user';

@Table
export class Comment extends Model {
  @Column
  @AutoIncrement
  @PrimaryKey
  commentId: string;

  @ForeignKey(() => Post)
  @Column
  postId: string;

  @BelongsTo(() => Post)
  post: Post;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @CreatedAt
  @Column
  createdAt: Date;

  @Column({ type: DataType.TEXT })
  content: string;
}
