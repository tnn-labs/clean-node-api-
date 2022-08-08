import { MissingParamError } from '../errors';
import { badRequest } from '../helper/http/http-helper';
import { HttpResponse, HttpRequest } from '../protocols';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    return null;
  }
}
