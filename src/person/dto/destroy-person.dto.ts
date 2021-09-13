import { IsNotEmpty } from 'class-validator';

// Data Transfer Object
export class DestroyPersonDto {
  @IsNotEmpty()
  id: number;
}
