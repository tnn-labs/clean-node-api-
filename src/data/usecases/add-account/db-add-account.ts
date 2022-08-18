import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  private readonly encripter: Encrypter;

  private readonly addAccountRepository: AddAccountRepository;

  constructor(
    encripter: Encrypter,
    addAccountRepository: AddAccountRepository,
  ) {
    this.encripter = encripter;
    this.addAccountRepository = addAccountRepository;
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encripter.encrypt(accountData.password);
    await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword,
    });
    return new Promise((resolve) => resolve(null));
  }
}
