import { Injectable, Body, NotFoundException, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { estudiante } from './estudiantes.entity'

@Injectable()
export class EstudianteService {

    constructor(@InjectModel(estudiante.name) private estudianteModel: Model<estudiante>){}

    findAll(){
        return this.estudianteModel.find().exec();
    }

    async create(@Body() body): Promise<estudiante>{
        
        const estudianteData = {
            nombre: body.nombre,
            email: body.email,
            password: body.password
        }
        const estudiante = new this.estudianteModel(estudianteData)
        return await estudiante.save();
    } 

    async findUpdate(@Param() params): Promise<estudiante>{
        const estudiante = await this.estudianteModel.findById(params.id);
        if(!estudiante){
            throw new NotFoundException('Estudiante no encontrado');
        }
        estudiante.nombre = params.nombre;
        estudiante.email = params.email;
        estudiante.password = params.password;
        
        return await estudiante.save();
    }

    async update(@Param() params): Promise<estudiante>{
        return await this.estudianteModel.findByIdAndUpdate({_id: params.id}, {$set:{nombre: params.nombre}});
        
    }

    async delete(@Param() params): Promise<estudiante> {
        return await this.estudianteModel.findOneAndDelete({_id: params.id})
    }

    async findOne(id: string) {
        const  estudiante = await this.estudianteModel.findOne({_id: id}).exec();
        if (!estudiante) {
            throw new NotFoundException(`Student #${id} not found`)
            
        }
        return estudiante;
    }
    
}
