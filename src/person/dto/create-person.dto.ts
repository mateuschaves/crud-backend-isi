import { IsNotEmpty, IsEmail } from 'class-validator';

// Data Transfer Object
export class CreatePersonDto {
  @IsNotEmpty({
    message: 'Informe o email',
  })
  @IsEmail(
    {},
    {
      message: 'Informe um email válido',
    },
  )
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;
}
