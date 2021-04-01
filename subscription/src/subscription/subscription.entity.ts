import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import {IsEmail} from 'class-validator'

@Entity('subscription')
export class Subscription {

  @PrimaryGeneratedColumn() 
  id: number;

  @Column() 
  @IsEmail()
  email: string;

  @Column() 
  born: Date;

  @Column({ type: 'boolean', default: false}) 
  consent: boolean;

  @Column() 
  campaign: string; // newsletterId

  @Column({nullable:true}) 
  firstName: string;

  @Column({nullable:true}) 
  gender: string;

  @CreateDateColumn() 
  create_at: Date  

}
