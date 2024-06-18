import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  bikeId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  packId?: SortOrder;
  routeId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
