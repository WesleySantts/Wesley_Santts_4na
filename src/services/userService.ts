import { UserRepository } from '../repositories/userRepository';
import { isValidEmail } from '../helpers/validationHelper';
import {isValidName} from '../helpers/validationNameHelper';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(name: string, email: string, passwordHash:string) {
    if (!isValidEmail(email)) {
      throw new Error('Email inválido');
    }
    if (!isValidName(name)) {
      throw new Error('nome inválido');
    }
    return await this.userRepository.addUser(name, email,passwordHash);
  }

  async listUsers() {
    return await this.userRepository.getAllUsers();
  }
}