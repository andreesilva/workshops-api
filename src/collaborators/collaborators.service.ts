import { Injectable } from '@nestjs/common';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollaboratorsService {
  constructor(private prismaService: PrismaService) {}
  create(createCollaboratorDto: CreateCollaboratorDto) {
    return this.prismaService.collaborator.create({
      data: {
        ...createCollaboratorDto,
      },
    });
  }

  async findAll() {
    const data = this.prismaService.collaborator.findMany({
      orderBy: {
        name: 'asc',
      },
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

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborator`;
  }
}
