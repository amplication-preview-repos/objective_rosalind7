import { BikeWhereUniqueInput } from "../bike/BikeWhereUniqueInput";
import { PackWhereUniqueInput } from "../pack/PackWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type TripUpdateInput = {
  bike?: BikeWhereUniqueInput | null;
  endDate?: Date | null;
  pack?: PackWhereUniqueInput | null;
  route?: RouteWhereUniqueInput | null;
  startDate?: Date | null;
};
