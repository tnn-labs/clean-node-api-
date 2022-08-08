import { MissingParamError } from '../errors';
import { badRequest } from '../helper/http/http-helper';
import { HttpResponse, HttpRequest } from '../protocols';

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    return null;
  }
}
