import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config/configuration";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormconfig } from "./ormconfig";
import { UserAbstractService } from "./services/abstract/user-abstract.service";
import { AuthController } from "./controllers/auth.controller";
import { UserService } from "./services/user.service";
import { Users } from 'C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath:'./.env'
    }),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [AuthController],
  providers:
  [
    UserAbstractService,
    UserService
  ]
})

export class AuthModule {}