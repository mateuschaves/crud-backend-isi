import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { PersonRepository } from './person.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PersonRepository])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
