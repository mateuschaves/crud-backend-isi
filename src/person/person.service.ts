import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonRepository } from './person.repository';
import { CreatePersonDto } from './dto/create-person.dto';
import { DestroyPersonDto } from './dto/destroy-person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private personRepository: PersonRepository,
  ) {}

  async store(createPersonDto: CreatePersonDto) {
    return this.personRepository.store(createPersonDto);
  }

  async list() {
    return this.personRepository.list();
  }

  async destroy(destroyPersonDto: DestroyPersonDto) {
    return this.personRepository.destroy(destroyPersonDto);
  }
}
