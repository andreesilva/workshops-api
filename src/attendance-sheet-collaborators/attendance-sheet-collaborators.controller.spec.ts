import { Test, TestingModule } from '@nestjs/testing';
import { AttendanceSheetCollaboratorsController } from './attendance-sheet-collaborators.controller';
import { AttendanceSheetCollaboratorsService } from './attendance-sheet-collaborators.service';

describe('AttendanceSheetCollaboratorsController', () => {
  let controller: AttendanceSheetCollaboratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttendanceSheetCollaboratorsController],
      providers: [AttendanceSheetCollaboratorsService],
    }).compile();

    controller = module.get<AttendanceSheetCollaboratorsController>(AttendanceSheetCollaboratorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
