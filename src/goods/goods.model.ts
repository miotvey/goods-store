import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";

interface GoodsCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: 'goods'})
export class Goods extends Model<Goods, GoodsCreationAttrs> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @Column({type: DataType.STRING})
  image: string;

  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User

}