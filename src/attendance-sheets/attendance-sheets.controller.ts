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

  @Get()
  getNameWorkshop(@Query('workshopNome') workshopNome: string) {
    console.log('workshopNome ' + workshopNome);
    if (workshopNome) {
      return this.attendanceSheetsService.getNameWorkshop(workshopNome);
    }
    return this.attendanceSheetsService.getAllWorkshops();
  }

  @Get()
  getDateWorkshop(@Query('data') data: string) {
    console.log('data ' + data);
    if (data) {
      return this.attendanceSheetsService.getDateWorkshop(data);
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
