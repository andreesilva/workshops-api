import { Injectable } from '@nestjs/common';
import { CreateCollaboratorDto } from './dto/create-collaborator.dto';
import { UpdateCollaboratorDto } from './dto/update-collaborator.dto';
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
    // console.log(data);
    // const data2 = await this.prismaService.attendanceSheet.findMany({
    //   where: {
    //     id: 1,
    //   },
    // });

    // console.log(data2);
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} collaborator`;
  }

  update(id: number, updateCollaboratorDto: UpdateCollaboratorDto) {
    return `This action updates a #${id} collaborator`;
  }

  remove(id: number) {
    return `This action removes a #${id} collaborator`;
  }
}
