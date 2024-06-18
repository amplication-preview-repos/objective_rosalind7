import * as graphql from "@nestjs/graphql";
import { PackResolverBase } from "./base/pack.resolver.base";
import { Pack } from "./base/Pack";
import { PackService } from "./pack.service";

@graphql.Resolver(() => Pack)
export class PackResolver extends PackResolverBase {
  constructor(protected readonly service: PackService) {
    super(service);
  }
}
