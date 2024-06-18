import { TripUpdateManyWithoutRoutesInput } from "./TripUpdateManyWithoutRoutesInput";

export type RouteUpdateInput = {
  distance?: number | null;
  duration?: number | null;
  name?: string | null;
  trips?: TripUpdateManyWithoutRoutesInput;
};
