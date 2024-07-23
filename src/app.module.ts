import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { WorkshopsModule } from './workshops/workshops.module';
import { AttendanceSheetsModule } from './attendance-sheets/attendance-sheets.module';
import { AttendanceSheetCollaboratorsModule } from './attendance-sheet-collaborators/attendance-sheet-collaborators.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    CollaboratorsModule,
    WorkshopsModule,
    AttendanceSheetsModule,
    AttendanceSheetCollaboratorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
