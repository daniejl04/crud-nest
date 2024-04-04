import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { estudiante, estudianteSchema } from "./estudiantes.entity";
import { EstudiantesController } from './estudiantes.controller';
import { EstudianteService } from './estudiantes.service';


@Module({

    imports:[
        MongooseModule.forFeature([
            {
                name: estudiante.name,
                schema: estudianteSchema
            }
        ])
    ],
    controllers: [EstudiantesController],
    providers: [EstudianteService]

})
export class EstudiantesModule {}
