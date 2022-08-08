import { MissingParamError } from '../errors';
import { HttpResponse, HttpRequest } from '../protocols';

export class SignUpController {
  handle(httpRequest: HttpRequest): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }

    return null;
  }
}
