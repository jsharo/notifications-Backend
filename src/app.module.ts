import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { NotificationsModule } from './notifications/notifications.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // tu usuario de postgres
      password: '741951',    // tu contraseña
      database: 'notification_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotificationsModule,
 
  ],
})
export class AppModule {}
