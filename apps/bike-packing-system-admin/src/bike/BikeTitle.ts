import { Bike as TBike } from "../api/bike/Bike";

export const BIKE_TITLE_FIELD = "brand";

export const BikeTitle = (record: TBike): string => {
  return record.brand?.toString() || String(record.id);
};
