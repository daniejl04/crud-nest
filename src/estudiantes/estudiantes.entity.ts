import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection:'students'})
export class estudiante extends Document{
    @Prop()
    nombre: string;
    @Prop()
    email: string;
    @Prop()
    password: string;
}

export const estudianteSchema = SchemaFactory.createForClass(estudiante)
