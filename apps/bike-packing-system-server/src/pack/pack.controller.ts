import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PackService } from "./pack.service";
import { PackControllerBase } from "./base/pack.controller.base";

@swagger.ApiTags("packs")
@common.Controller("packs")
export class PackController extends PackControllerBase {
  constructor(protected readonly service: PackService) {
    super(service);
  }
}
