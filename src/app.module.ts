import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { EstudianteController } from './estudiantes/estudiantes.controller';
//import { EstudianteService } from './estudiantes/estudiantes.service';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
//import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://danielestebanjimenezlopez:c6nZDMfbdQFEQ3gM@test.laxdtla.mongodb.net/'),
    EstudiantesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
