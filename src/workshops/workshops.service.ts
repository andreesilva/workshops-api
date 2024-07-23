import { Injectable } from '@nestjs/common';
import { CreateWorkshopDto } from './dto/create-workshop.dto';
import { UpdateWorkshopDto } from './dto/update-workshop.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkshopsService {
  constructor(private prismaService: PrismaService) {}

  create(createWorkshopDto: CreateWorkshopDto) {
    return this.prismaService.workshop.create({
      data: {
        ...createWorkshopDto,
        dateCompletion: new Date(createWorkshopDto.dateCompletion),
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

  findOne(id: number) {
    return `This action returns a #${id} workshop`;
  }

  update(id: number, updateWorkshopDto: UpdateWorkshopDto) {
    return `This action updates a #${id} workshop`;
  }

  remove(id: number) {
    return `This action removes a #${id} workshop`;
  }
}
