import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from './config/configuration';

ConfigModule.forRoot({
  load: [config],
  envFilePath: './.env',
});

const { database } = config();

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: database.host,
  port: database.port,
  username: database.username,
  password: database.password,
  database: database.database,
  entities: [
    "C:/Projects/BeYapsi/libraries/beyapsi.yapsi.backend.sqlserver/dist/entities/*.entity{.ts,.js}"
  ],
  synchronize: true,
  autoLoadEntities: true,
  options: {
    trustServerCertificate: true,
  }

}