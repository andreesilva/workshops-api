import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './login.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @ApiTags('Usuário')
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  // @Post('refresh')
  // reauthenticate(@Body() body) {
  //   return this.authService.reauthenticate(body);
  // }

  @UseGuards(AuthGuard)
  @ApiTags('Usuário')
  @Get('me')
  getProfile(@Request() req) {
    return req.user;
  }
}
