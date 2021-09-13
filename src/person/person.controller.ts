import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { DestroyPersonDto } from './dto/destroy-person.dto';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  // POST - http://localhost:3000/person
  @Post('/')
  @UsePipes(ValidationPipe)
  store(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.store(createPersonDto);
  }

  // DELETE - http://localhost:3000/person/1
  @Delete('/:id')
  @UsePipes(ValidationPipe)
  destroy(@Param() destroyPersonDto: DestroyPersonDto) {
    return this.personService.destroy(destroyPersonDto);
  }

  // GET - http://localhost:3000/person
  @Get('/')
  list() {
    return this.personService.list();
  }
}
