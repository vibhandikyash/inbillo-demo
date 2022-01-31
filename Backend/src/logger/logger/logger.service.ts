import { ConsoleLogger, Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class MyLoggerService extends ConsoleLogger implements LoggerService {
  /**
   * Logging service to store all logs.
   * Can furhter be implemented to transport logs to any external service of store in database.
   * @param message Log Message
   * @param module Module from which the message has originalted
   */
  log(message: any, module = 'App') {
    super.log(`${module}:  ${message}`);
  }
}
