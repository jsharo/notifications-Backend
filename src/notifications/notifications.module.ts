import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { Notification } from './notifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
