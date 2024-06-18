import { Module } from "@nestjs/common";
import { PackModuleBase } from "./base/pack.module.base";
import { PackService } from "./pack.service";
import { PackController } from "./pack.controller";
import { PackResolver } from "./pack.resolver";

@Module({
  imports: [PackModuleBase],
  controllers: [PackController],
  providers: [PackService, PackResolver],
  exports: [PackService],
})
export class PackModule {}
