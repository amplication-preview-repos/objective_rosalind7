/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { TripUpdateManyWithoutPacksInput } from "./TripUpdateManyWithoutPacksInput";
import { Type } from "class-transformer";

@InputType()
class PackUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TripUpdateManyWithoutPacksInput,
  })
  @ValidateNested()
  @Type(() => TripUpdateManyWithoutPacksInput)
  @IsOptional()
  @Field(() => TripUpdateManyWithoutPacksInput, {
    nullable: true,
  })
  trips?: TripUpdateManyWithoutPacksInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  waterproof?: boolean | null;
}

export { PackUpdateInput as PackUpdateInput };
