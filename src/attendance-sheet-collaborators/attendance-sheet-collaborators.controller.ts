import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AttendanceSheetCollaboratorsService } from './attendance-sheet-collaborators.service';
import { CreateAttendanceSheetCollaboratorDto } from './dto/create-attendance-sheet-collaborator.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('api/attendance-sheet/collaborators')
export class AttendanceSheetCollaboratorsController {
  constructor(
    private readonly attendanceSheetCollaboratorsService: AttendanceSheetCollaboratorsService,
  ) {}

  @ApiTags('Ata de presença')
  @Post()
  create(
    @Body()
    createAttendanceSheetCollaboratorDto: CreateAttendanceSheetCollaboratorDto,
  ) {
    return this.attendanceSheetCollaboratorsService.create(
      createAttendanceSheetCollaboratorDto,
    );
  }

  @ApiTags('Ata de presença')
  @Get()
  findAll() {
    return this.attendanceSheetCollaboratorsService.findAll();
  }

  @ApiTags('Ata de presença')
  @Delete(':attendanceSheetId/collaborator/:collaboratorId')
  remove(
    @Param('attendanceSheetId') attendanceSheetId: number,
    @Param('collaboratorId') collaboratorId: number,
  ) {
    try {
      this.attendanceSheetCollaboratorsService.remove(
        attendanceSheetId,
        collaboratorId,
      );
      return {
        success: true,
        message: 'Colaborador removido com sucesso',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
}
