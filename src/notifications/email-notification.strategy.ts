import { NotificationStrategy } from "./notification-strategy.interface";


export class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`📧 Email enviado: ${message}`);
  }
}
