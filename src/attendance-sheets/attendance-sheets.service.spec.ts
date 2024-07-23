import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceSheetsService } from './attendance-sheets.service';

describe('AttendanceSheetsService', () => {
  let service: AttendanceSheetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceSheetsService],
    }).compile();

    service = module.get<AttendanceSheetsService>(AttendanceSheetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
