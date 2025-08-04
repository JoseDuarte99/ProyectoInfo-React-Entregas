import { createContext } from "react";

import type { FilterStateProps, FilterType } from "../typing/Typing";

interface FilterContextProps {
    valueFilter: FilterStateProps;
    addFilterProducts: (type: FilterType, payload: string) => void;
    removeFilterProducts: (type: FilterType, payload: string) => void;
    resetFilterProducts: (type: FilterType, payload: string) => void;
}

const FilterContext = createContext<FilterContextProps | null>(null);

export default FilterContext;