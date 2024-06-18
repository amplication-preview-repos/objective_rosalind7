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
  IsNumber,
  IsOptional,
  IsInt,
  IsString,
  ValidateNested,
} from "class-validator";
import { TripCreateNestedManyWithoutRoutesInput } from "./TripCreateNestedManyWithoutRoutesInput";
import { Type } from "class-transformer";

@InputType()
class RouteCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  distance?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

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
    type: () => TripCreateNestedManyWithoutRoutesInput,
  })
  @ValidateNested()
  @Type(() => TripCreateNestedManyWithoutRoutesInput)
  @IsOptional()
  @Field(() => TripCreateNestedManyWithoutRoutesInput, {
    nullable: true,
  })
  trips?: TripCreateNestedManyWithoutRoutesInput;
}

export { RouteCreateInput as RouteCreateInput };