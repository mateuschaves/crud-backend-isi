import { Repository, EntityRepository } from 'typeorm';
import { Person } from './person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { DestroyPersonDto } from './dto/destroy-person.dto';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
  /*
        Cria uma pessoa
  */
  async store(createPersonDto: CreatePersonDto) {
    const { email, name, phone } = createPersonDto;

    const person = this.create();

    person.email = email;
    person.name = name;
    person.phone = phone;

    try {
      await person.save();
      return person;
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Pessoa já existe');
      else throw new InternalServerErrorException();
    }
  }

  /*
    Lista todas pessoas cadastradas
  */
  async list() {
    try {
      return await this.find();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  /**
   * Deleta uma pessoa cadastrada pelo id
   */

  async destroy(destroyPersonDto: DestroyPersonDto) {
    const { id } = destroyPersonDto;

    try {
      // Busca o usuário no banco com o id informado
      const [userToDelete] = await this.findByIds([id]);

      // Verifica se foi encontrado um usuário com o id informado
      if (!userToDelete) {
        throw new BadRequestException('Usuário não encontrado');
      }

      // Remove o usuário
      userToDelete.remove();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
