import { Injectable } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkshopsService {
  constructor(private prismaService: PrismaService) {}

  create(createWorkshopDto: CreateWorkshopDto) {
    return this.prismaService.workshop.create({
      data: {
        ...createWorkshopDto,
      },
    });
  }

  findAll() {
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

  searchName(name) {
    return this.prismaService.workshop.findFirst({
      where: {
        name: name,
      },
    });
  }
}
