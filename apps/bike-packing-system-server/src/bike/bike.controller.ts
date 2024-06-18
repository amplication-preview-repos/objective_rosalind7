import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BikeService } from "./bike.service";
import { BikeControllerBase } from "./base/bike.controller.base";

@swagger.ApiTags("bikes")
@common.Controller("bikes")
export class BikeController extends BikeControllerBase {
  constructor(protected readonly service: BikeService) {
    super(service);
  }
}
