/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PackWhereInput } from "./PackWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PackCountArgs {
  @ApiProperty({
    required: false,
    type: () => PackWhereInput,
  })
  @Field(() => PackWhereInput, { nullable: true })
  @Type(() => PackWhereInput)
  where?: PackWhereInput;
}

export { PackCountArgs as PackCountArgs };