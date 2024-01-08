import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { config } from "./config/configuration";
import { ormconfig } from "./ormconfig";
import { UserAbstractService } from "./services/abstract/user-abstract.service";
import { AuthController } from "./controllers/auth.controller";
import { UserService } from "./services/user.service";
import { Usuarios } from 'C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      envFilePath:'./.env'
    }),
    ClientsModule.registerAsync([
      {
        name: 'USER_SERVICE',
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('users.host'),
            port: configService.get('users.rpcPort')
          }
        })
      }
    ]),
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Usuarios])
  ],
  controllers: [AuthController],
  providers:
  [
    UserAbstractService,
    UserService
  ]
})

export class AuthModule {}