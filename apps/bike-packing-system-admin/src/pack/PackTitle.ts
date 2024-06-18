import { Pack as TPack } from "../api/pack/Pack";

export const PACK_TITLE_FIELD = "name";

export const PackTitle = (record: TPack): string => {
  return record.name?.toString() || String(record.id);
};
