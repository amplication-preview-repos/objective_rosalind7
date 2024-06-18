import { TripUpdateManyWithoutPacksInput } from "./TripUpdateManyWithoutPacksInput";

export type PackUpdateInput = {
  capacity?: number | null;
  name?: string | null;
  trips?: TripUpdateManyWithoutPacksInput;
  waterproof?: boolean | null;
};
