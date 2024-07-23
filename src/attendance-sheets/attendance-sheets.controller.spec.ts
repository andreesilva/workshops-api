import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceSheetsController } from './attendance-sheets.controller';
import { AttendanceSheetsService } from './attendance-sheets.service';

describe('AttendanceSheetsController', () => {
  let controller: AttendanceSheetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceSheetsController],
      providers: [AttendanceSheetsService],
    }).compile();

    controller = module.get<AttendanceSheetsController>(AttendanceSheetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
