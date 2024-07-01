import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'sum' })
  sum(numbers: number[]): number {
    return this.appService.sum(numbers)
  }
}
