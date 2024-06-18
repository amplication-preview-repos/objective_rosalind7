import * as graphql from "@nestjs/graphql";
import { BikeResolverBase } from "./base/bike.resolver.base";
import { Bike } from "./base/Bike";
import { BikeService } from "./bike.service";

@graphql.Resolver(() => Bike)
export class BikeResolver extends BikeResolverBase {
  constructor(protected readonly service: BikeService) {
    super(service);
  }
}
