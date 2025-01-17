import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttendanceSheetDto } from './dto/create-attendance-sheet.dto';
//import { UpdateAttendanceSheetDto } from './dto/update-attendance-sheet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttendanceSheetsService {
  constructor(private prismaService: PrismaService) {}

  create(createAttendanceSheetDto: CreateAttendanceSheetDto) {
    return this.prismaService.attendanceSheet
      .create({
        data: {
          ...createAttendanceSheetDto,
        },
      })
      .catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new NotFoundException('Já existe uma ata para esse workshop');
          }
        }
        throw e;
      });
  }

  findAll() {
    return this.prismaService.attendanceSheet.findMany({
      include: {
        workshop: true,
      },
    });
  }

  getCollaboratorWorkshop(query: string) {
    return this.prismaService.workshop.findMany({
      where: {
        attendanceSheet: {
          some: {
            attendanceSheetCollaborator: {
              some: {
                collaborator: {
                  name: query,
                },
              },
            },
          },
        },
      },
      include: {
        attendanceSheet: true,
      },
    });
  }

  getNameWorkshop(query: string) {
    return this.prismaService.workshop.findMany({
      where: {
        name: query,
      },
      include: {
        attendanceSheet: {
          include: {
            attendanceSheetCollaborator: {
              include: {
                collaborator: true,
              },
            },
          },
        },
      },
    });
  }

  getAllWorkshops() {
    return this.prismaService.workshop.findMany({
      include: {
        attendanceSheet: {
          include: {
            attendanceSheetCollaborator: {
              include: {
                collaborator: true,
              },
            },
          },
        },
      },
    });
  }

  getWorkshopWithCollaborators(id: number) {
    return this.prismaService.workshop.findMany({
      where: {
        id: id,
      },

      include: {
        attendanceSheet: {
          include: {
            attendanceSheetCollaborator: {
              orderBy: {
                collaborator: {
                  name: 'asc',
                },
              },
              include: {
                collaborator: true,
              },
            },
          },
        },
      },
    });
  }

  getDateWorkshop(query: string) {
    return this.prismaService.workshop.findMany({
      where: {
        dateCompletion: query,
      },
      include: {
        attendanceSheet: {
          include: {
            attendanceSheetCollaborator: {
              include: {
                collaborator: true,
              },
            },
          },
        },
      },
    });
  }
}
