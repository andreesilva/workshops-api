import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceSheetCollaboratorsService } from './attendance-sheet-collaborators.service';

describe('AttendanceSheetCollaboratorsService', () => {
  let service: AttendanceSheetCollaboratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttendanceSheetCollaboratorsService],
    }).compile();

    service = module.get<AttendanceSheetCollaboratorsService>(AttendanceSheetCollaboratorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
