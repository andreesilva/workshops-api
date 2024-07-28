import { PrismaService } from './../prisma/prisma.service';
import {
  Controller,
  Get,
  Post,
  Body,
  //Patch,
  Param,
  Delete,
  //UseGuards,
  Query,
} from '@nestjs/common';
import { AttendanceSheetsService } from './attendance-sheets.service';
import { CreateAttendanceSheetDto } from './dto/create-attendance-sheet.dto';

//@UseGuards(AuthGuard)
@Controller('api/attendance-sheets')
export class AttendanceSheetsController {
  constructor(
    private readonly attendanceSheetsService: AttendanceSheetsService,
  ) {}

  @Post()
  create(@Body() createAttendanceSheetDto: CreateAttendanceSheetDto) {
    return this.attendanceSheetsService.create(createAttendanceSheetDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceSheetsService.findOne(+id);
  }

  @Get('workshop/collaborator?')
  getCollaboratorWorkshop(@Query('collaborator') collaborator: string) {
    console.log('collaborator ' + collaborator);
    if (collaborator) {
      return this.attendanceSheetsService.getCollaboratorWorkshop(collaborator);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @Get('workshop/name?')
  getNameWorkshop(@Query('name') name: string) {
    console.log('name ' + name);
    if (name) {
      return this.attendanceSheetsService.getNameWorkshop(name);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @Get('workshop/date?')
  getDateWorkshop(@Query('date') date: string) {
    console.log('date ' + date);
    if (date) {
      return this.attendanceSheetsService.getDateWorkshop(date);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @Get('collaborator/:id')
  getWorkshopWithCollaborators(@Param('id') id: string) {
    return this.attendanceSheetsService.getWorkshopWithCollaborators(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceSheetsService.remove(+id);
  }
}
