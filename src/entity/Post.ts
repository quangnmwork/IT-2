import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@Entity()
export class Post {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  title: string;

  @Column({ nullable: true })
  thumbnail: string;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  like?: number;

  @Column({ type: "text" })
  content: string;

  @Column("simple-array")
  tags?: string[];

  @Column()
  category: string;
}
