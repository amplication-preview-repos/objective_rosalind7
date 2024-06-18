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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TripCreateNestedManyWithoutBikesInput } from "./TripCreateNestedManyWithoutBikesInput";
import { Type } from "class-transformer";

@InputType()
class BikeCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  brand?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;

  @ApiProperty({
    required: false,
    type: () => TripCreateNestedManyWithoutBikesInput,
  })
  @ValidateNested()
  @Type(() => TripCreateNestedManyWithoutBikesInput)
  @IsOptional()
  @Field(() => TripCreateNestedManyWithoutBikesInput, {
    nullable: true,
  })
  trips?: TripCreateNestedManyWithoutBikesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { BikeCreateInput as BikeCreateInput };