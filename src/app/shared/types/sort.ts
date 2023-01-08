import { SortOrder } from "../constants/sort-order";

export interface Sort {
  field: string;
  order?: SortOrder;
}
