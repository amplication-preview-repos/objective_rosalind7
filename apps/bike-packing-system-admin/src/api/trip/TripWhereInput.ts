import { BikeWhereUniqueInput } from "../bike/BikeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackWhereUniqueInput } from "../pack/PackWhereUniqueInput";
import { RouteWhereUniqueInput } from "../route/RouteWhereUniqueInput";

export type TripWhereInput = {
  bike?: BikeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  pack?: PackWhereUniqueInput;
  route?: RouteWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
