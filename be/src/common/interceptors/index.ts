import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const now = Date.now();

    return next
      .handle()
      .pipe(
        tap(() => {
          const responseTime = Date.now() - now;
          console.log(`Request to ${request.url} took ${responseTime}ms`);
        }),
      );
  }
}

export * from './logging.interceptor';