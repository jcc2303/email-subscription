// file: subscription.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import {IsEmail} from 'class-validator'
// import { ApiProperty } from "@nestjs/swagger";

@Entity('subscription')
export class Subscription {
  @PrimaryGeneratedColumn() id: number;

//  @ApiProperty()
  @Column() 
  @IsEmail()
  email: string;

//  @ApiProperty()
  @Column() 
  born: Date;

//  @ApiProperty()
  @Column({ type: 'boolean', default: false}) 
  consent: boolean;

//  @ApiProperty()
  @Column() 
  campaign: string; // newsletterId

//  @ApiProperty({nullable:true})
  @Column({nullable:true}) 
  firstName: string;

//  @ApiProperty({nullable:true})
  @Column({nullable:true}) 
  gender: string;


  @CreateDateColumn() create_at: Date  

}
