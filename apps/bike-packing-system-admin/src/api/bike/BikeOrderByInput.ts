import { SortOrder } from "../../util/SortOrder";

export type BikeOrderByInput = {
  brand?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  model?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
