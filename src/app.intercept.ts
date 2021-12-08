import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class HeadersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    const ctx = context.switchToHttp();
    const request: Request = ctx.getRequest();

    this.setHeaders(request);

    return next.handle();
  }

  private setHeaders(request): void {
    this.updateHeaders(
      request,
      'User-Id',
      request['User-Id'],
    );
  }

  private updateHeaders(
    request: Request,
    property: string,
    value: string
  ): void {
    if (!request.headers.hasOwnProperty(property)) {
      request.headers[property] = value;
    } else {
      void 0;
    }
  }
}