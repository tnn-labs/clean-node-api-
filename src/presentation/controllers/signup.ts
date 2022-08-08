import { MissingParamError } from '../errors';
import { badRequest } from '../helper/http/http-helper';
import { HttpResponse, HttpRequest, Controller } from '../protocols';

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation',
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    return null;
  }
}
