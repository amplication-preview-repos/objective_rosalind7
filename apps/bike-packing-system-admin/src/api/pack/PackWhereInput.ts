import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PackWhereInput = {
  capacity?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  trips?: TripListRelationFilter;
  waterproof?: BooleanNullableFilter;
};
