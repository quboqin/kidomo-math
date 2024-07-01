import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  sum(numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0)
  }
}
