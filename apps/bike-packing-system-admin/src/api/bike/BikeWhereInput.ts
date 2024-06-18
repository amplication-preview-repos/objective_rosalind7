import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type BikeWhereInput = {
  brand?: StringNullableFilter;
  id?: StringFilter;
  model?: StringNullableFilter;
  trips?: TripListRelationFilter;
  typeField?: StringNullableFilter;
};
