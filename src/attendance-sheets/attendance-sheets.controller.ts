import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AttendanceSheetsService } from './attendance-sheets.service';
import { CreateAttendanceSheetDto } from './dto/create-attendance-sheet.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('api/attendance-sheets')
export class AttendanceSheetsController {
  constructor(
    private readonly attendanceSheetsService: AttendanceSheetsService,
  ) {}

  @ApiTags('Ata de presença')
  @Post()
  create(@Body() createAttendanceSheetDto: CreateAttendanceSheetDto) {
    return this.attendanceSheetsService.create(createAttendanceSheetDto);
  }

  @ApiTags('Ata de presença')
  @Get('workshop/collaborator?')
  getCollaboratorWorkshop(@Query('collaborator') collaborator: string) {
    if (collaborator) {
      return this.attendanceSheetsService.getCollaboratorWorkshop(collaborator);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @ApiTags('Ata de presença')
  @Get('workshop/name?')
  getNameWorkshop(@Query('name') name: string) {
    if (name) {
      return this.attendanceSheetsService.getNameWorkshop(name);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @ApiTags('Ata de presença')
  @Get('workshop/date?')
  getDateWorkshop(@Query('date') date: string) {
    if (date) {
      return this.attendanceSheetsService.getDateWorkshop(date);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @ApiTags('Ata de presença')
  @Get('collaborator/:id')
  getWorkshopWithCollaborators(@Param('id') id: string) {
    return this.attendanceSheetsService.getWorkshopWithCollaborators(+id);
  }
}
