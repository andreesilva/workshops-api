import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
  //UseGuards,
} from '@nestjs/common';
import { AttendanceSheetCollaboratorsService } from './attendance-sheet-collaborators.service';
import { CreateAttendanceSheetCollaboratorDto } from './dto/create-attendance-sheet-collaborator.dto';
//import { UpdateAttendanceSheetCollaboratorDto } from './dto/update-attendance-sheet-collaborator.dto';
//import { AuthGuard } from 'src/auth/auth.guard';

//@UseGuards(AuthGuard)
@Controller('api/attendance-sheet/collaborators')
export class AttendanceSheetCollaboratorsController {
  constructor(
    private readonly attendanceSheetCollaboratorsService: AttendanceSheetCollaboratorsService,
  ) {}

  @Post()
  create(
    @Body()
    createAttendanceSheetCollaboratorDto: CreateAttendanceSheetCollaboratorDto,
  ) {
    return this.attendanceSheetCollaboratorsService.create(
      createAttendanceSheetCollaboratorDto,
    );
  }

  @Get()
  findAll() {
    return this.attendanceSheetCollaboratorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceSheetCollaboratorsService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body()
  //   updateAttendanceSheetCollaboratorDto: UpdateAttendanceSheetCollaboratorDto,
  // ) {
  //   return this.attendanceSheetCollaboratorsService.update(
  //     +id,
  //     updateAttendanceSheetCollaboratorDto,
  //   );
  // }
  /*
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.userService.remove(+id);
      return {
        success: true,
        message: 'User Deleted Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }
  */
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
