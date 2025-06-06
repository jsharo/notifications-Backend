import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    TypeOrmModule.forRoot({ 
      type: 'postgres',
      url: process.env.DATABASE_URL || 'postgres://postgres:741951@localhost:5432/notification_db', 
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD || '741951', 
      database: process.env.DB_NAME || 'notification_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: { rejectUnauthorized: false },
      synchronize: false,
      autoLoadEntities: true,
    }),
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 