import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttendanceSheetCollaboratorDto } from './dto/create-attendance-sheet-collaborator.dto';
//import { UpdateAttendanceSheetCollaboratorDto } from './dto/update-attendance-sheet-collaborator.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceSheetCollaboratorsService {
  constructor(private prismaService: PrismaService) {}

  async create(
    createAttendanceSheetCollaboratorDto: CreateAttendanceSheetCollaboratorDto,
  ) {
    const attendanceSheetCollaborator =
      await this.prismaService.attendanceSheetCollaborator.findFirst({
        where: {
          attendanceSheetId:
            createAttendanceSheetCollaboratorDto.attendanceSheetId,
          collaboratorId: createAttendanceSheetCollaboratorDto.collaboratorId,
        },
      });

    if (attendanceSheetCollaborator !== null) {
      throw new NotFoundException('Esse colaborador ja foi adicionado');
    }

    return this.prismaService.attendanceSheetCollaborator.create({
      data: {
        ...createAttendanceSheetCollaboratorDto,
      },
    });
  }

  findAll() {
    return this.prismaService.collaborator.findMany({
      include: {
        attendanceSheetCollaborator: {
          include: {
            attendanceSheet: {
              include: {
                workshop: true,
              },
            },
          },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceSheetCollaborator`;
  }

  // update(
  //   id: number,
  //   updateAttendanceSheetCollaboratorDto: UpdateAttendanceSheetCollaboratorDto,
  // ) {
  //   return `This action updates a #${id} attendanceSheetCollaborator`;
  // }

  async remove(attendanceSheetId: number, collaboratorId: number) {
    const attendanceSheetCollaborator =
      await this.prismaService.attendanceSheetCollaborator.findFirst({
        where: {
          attendanceSheetId: Number(attendanceSheetId),
          collaboratorId: Number(collaboratorId),
        },
      });

    return this.prismaService.attendanceSheetCollaborator.delete({
      where: {
        id: attendanceSheetCollaborator!.id,
      },
    });
  }
}
