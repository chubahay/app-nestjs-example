import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('dog', () => {
    it('should return "Thanks for the get request - Dog"', () => {
      expect(appController.getDog()).toBe('Thanks for the get request - Dog');
    });
  });

  describe('cow', () => {
    it('should return "Thanks for the post request - Cow"', () => {
      expect(appController.getDog()).toBe('Thanks for the post request - Cow');
    });
  });

});
