import {Module} from "@nestjs/common";
// import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { GoodsModule } from './goods/goods.module';
import { FilesModule } from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { UserRoles } from "./roles/user-roles.model";
import { Goods } from "./goods/goods.model";
import { Role } from "./roles/roles.model";
import { User } from "./users/users.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve( __dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Role, UserRoles, Goods],
      synchronize: true,
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: process.env.TYPEORM_HOST,
    //   port: Number(process.env.TYPEORM_PORT),
    //   username: process.env.TYPEORM_USERNAME,
    //   password: process.env.TYPEORM_PASSWORD,
    //   database: process.env.TYPEORM_DATABASE,
    //   models: [User, Role, UserRoles, Goods],
    //   autoLoadModels: true
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    GoodsModule,
    FilesModule,
  ]
})
export class AppModule {}