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
import { BikeWhereUniqueInput } from "../../bike/base/BikeWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackWhereUniqueInput } from "../../pack/base/PackWhereUniqueInput";
import { RouteWhereUniqueInput } from "../../route/base/RouteWhereUniqueInput";

@InputType()
class TripWhereInput {
  @ApiProperty({
    required: false,
    type: () => BikeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BikeWhereUniqueInput)
  @IsOptional()
  @Field(() => BikeWhereUniqueInput, {
    nullable: true,
  })
  bike?: BikeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PackWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PackWhereUniqueInput)
  @IsOptional()
  @Field(() => PackWhereUniqueInput, {
    nullable: true,
  })
  pack?: PackWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RouteWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RouteWhereUniqueInput)
  @IsOptional()
  @Field(() => RouteWhereUniqueInput, {
    nullable: true,
  })
  route?: RouteWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  startDate?: DateTimeNullableFilter;
}

export { TripWhereInput as TripWhereInput };