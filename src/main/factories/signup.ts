import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';
import { SignUpController } from '../../presentation/controllers/signup/signup';
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter';

export const makeSignUpController = (): SignUpController => {
  // infra layer
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);

  // infra layer
  const accountMongoRepository = new AccountMongoRepository();

  // infra layer
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository);

  // utils layer
  const emailValidatorAdapter = new EmailValidatorAdapter();

  // presentation layer
  return new SignUpController(emailValidatorAdapter, dbAddAccount);
};
