import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  createUser(data: CreateUserDto) {
    return this.prismaService.user
      .create({
        data: {
          ...data,
          password: this.generateHash(data.password),
          roles: UserRoles.USER,
        },
      })
      .catch((e) => {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          if (e.code === 'P2002') {
            throw new NotFoundException('Email já cadastrado no sistema');
          }
        }
        throw e;
      });
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
  findOne(idOrEmail: number | string) {
    return this.prismaService.user.findFirst({
      where: {
        ...(typeof idOrEmail === 'number'
          ? { id: idOrEmail }
          : { email: idOrEmail }),
      },
    });
  }
}
