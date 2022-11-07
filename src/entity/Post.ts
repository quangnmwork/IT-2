import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Post {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

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
