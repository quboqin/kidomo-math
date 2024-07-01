import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { MathModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(MathModule, {
    transport: Transport.TCP,
    options: {
      port: parseInt(process.env.MATH_PORT, 10) || 3001
    }
  })
  await app
    .listen()
    .then(() => console.log(`Microservice Math is listening on port ${process.env.MATH_PORT}`))
}
bootstrap()
