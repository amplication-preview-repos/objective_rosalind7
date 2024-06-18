import { Module } from "@nestjs/common";
import { BikeModuleBase } from "./base/bike.module.base";
import { BikeService } from "./bike.service";
import { BikeController } from "./bike.controller";
import { BikeResolver } from "./bike.resolver";

@Module({
  imports: [BikeModuleBase],
  controllers: [BikeController],
  providers: [BikeService, BikeResolver],
  exports: [BikeService],
})
export class BikeModule {}
