import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AuthModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
