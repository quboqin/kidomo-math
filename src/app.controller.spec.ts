import { Test, TestingModule } from '@nestjs/testing'
import { MathController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
  let appController: MathController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MathController],
      providers: [AppService]
    }).compile()

    appController = app.get<MathController>(MathController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
