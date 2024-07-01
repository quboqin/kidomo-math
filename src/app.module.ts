import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { ConfigModule } from '@nestjs/config'
import { MATH_SERVICE } from './app.constants'
import { MathController } from './app.controller'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ClientsModule.register([{ name: MATH_SERVICE, transport: Transport.TCP }])
  ],
  controllers: [MathController]
})
export class MathModule {}
