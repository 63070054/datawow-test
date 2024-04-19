import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token) {
      // decode token
      const decodedToken = JSON.parse(atob(token))
      request.user = decodedToken
    }

    return next.handle();
  }
}