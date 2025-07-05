import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiBaseUrl = environment.apiBaseUrl;
  const isAbsoluteUrl = /^(http|https):\/\//.test(req.url);

  if (isAbsoluteUrl || req.url.startsWith('assets/')) {
    return next(req);
  }

  const modifiedReq = req.clone({
    url: `${apiBaseUrl}${req.url}`
  });

  return next(modifiedReq);
};

