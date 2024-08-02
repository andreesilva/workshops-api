/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './login.dto';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  flag = 0;

  async login(data: LoginDto) {
    const user = await this.usersService.findOne(data.email);

    //console.log('Login email ' + user.email);
    //console.log('Login password - data ' + data.password);
    //console.log('Login password - user ' + user.password);

    if (this.flag === 1) {
      if (!user || !user.password) {
        throw new NotFoundException('Email ou senha inválidos');
      }
    } else {
      if (!user || !bcrypt.compareSync(data.password, user.password)) {
        throw new NotFoundException('Email ou senha inválidos');
      }
    }

    const { password, ...result } = user;

    const refreshToken = this.jwtService.sign(result, {
      secret: jwtConstants.secretRefresh,
      expiresIn: '1h',
    });

    return {
      access_token: this.jwtService.sign(result, {
        secret: jwtConstants.secret,
        expiresIn: '1h',
      }),
      refresh_token: refreshToken,
    };
  }

  async reauthenticate(body) {
    const payload: User = await this.verificarRefreshToken(body);
    //console.log('reauthenticate ' + payload.email);
    // console.log('reauthenticate ' + payload.name);
    //console.log('reauthenticate ' + payload.password);
    //console.log('reauthenticate ' + payload.id); ///este método também será implementado abaixo

    this.flag = 1;

    return this.login(payload);
  }

  async verificarRefreshToken(body) {
    const refreshToken = body.refresh_token;

    console.log('Token passado ' + refreshToken);

    if (!refreshToken) {
      console.log('refreshToken ' + refreshToken);
      throw new NotFoundException('Usuário não encontrado');
    }

    const email = this.jwtService.decode(refreshToken)['email'];
    //console.log('Email ' + email);
    const usuario = await this.usersService.findOne(email);

    this.flag = 1;

    const token = await this.login(usuario);
    console.log('Novo token ' + token.refresh_token);

    if (!usuario) {
      //console.log('refreshToken ' + usuario);
      throw new NotFoundException('Usuário não encontrado');
    }

    if (refreshToken === token.refresh_token) {
      throw new NotFoundException('Token Inválido');
    }

    try {
      this.jwtService.verify(refreshToken, {
        secret: jwtConstants.secretRefresh,
      });

      //console.log('Payload' + payload);
      console.log('Try ' + usuario.email);
      //console.log('Try ' + usuario.password);
      return usuario;
    } catch (err) {
      if (err.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Assinatura Inválida');
      }
      if (err.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token Expirado');
      }
      throw new UnauthorizedException(err.name);
    }
  }
}
