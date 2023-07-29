import { IsNumber, Max } from 'class-validator';

class PaginationRequestDto {
  @IsNumber()
  @Max(0)
  page: number;
}

export default PaginationRequestDto;
