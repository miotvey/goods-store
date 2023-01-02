import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Goods} from "./goods.model";
import {FilesModule} from "../files/files.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  providers: [GoodsService],
  controllers: [GoodsController],
  imports: [
    TypeOrmModule.forFeature([User, Goods]),
    FilesModule
  ]
})
export class GoodsModule {}