import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import * as bcrypt from "bcryptjs";
import { Post } from "./Post";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @Length(4, 20)
  username: string;

  @Column()
  avatar: string;

  @Column()
  password: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  isAdmin: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}

