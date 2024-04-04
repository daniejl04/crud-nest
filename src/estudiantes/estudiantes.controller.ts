import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstudianteService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController {

    constructor(private readonly estudianteService: EstudianteService){}


    @Get('allStudent')
    getAll(){
        return this.estudianteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.estudianteService.findOne(id);
    }


    @Post('create')
    create(@Body() body){
        return this.estudianteService.create(body);
    }

    @Patch('update/:id/userName/:userName')
    update(@Param() params){
        return this.estudianteService.update(params);
    }

    @Delete('delete/id/:id')
    delete(@Body() body){
        return this.estudianteService.delete(body);
    }

    
}
