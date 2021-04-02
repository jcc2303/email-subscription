import { HttpException, HttpStatus } from '@nestjs/common';

export class IllegalArgumentException extends HttpException {
  constructor(details: string) {
    const response = {
      code: 'Illegal Parameter',
      message: 'Bad Request Illegal Parameter',
      details,
    };
    super(response, HttpStatus.BAD_REQUEST);
  }
}
