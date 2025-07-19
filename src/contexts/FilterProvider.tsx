import { useReducer, type ReactNode } from "react";
import FilterContext from "./FilterContext"
import FilterReduce from "../reducers/FilterReduce";


import { FilterType, INITIAL_STATE } from "../typing/Typing";


interface FilterProviderProps {
    children: ReactNode;
};


const FilterProvider = ( { children }: FilterProviderProps) => {

    
    const [ valueFilter, dispatch] = useReducer(FilterReduce, INITIAL_STATE);

    const addFilterProducts = (typeFilter: FilterType, valueAddFilter: string) => {
        dispatch({ type: typeFilter, payload: valueAddFilter})
    };

    const removeFilterProducts = (typeFilter: FilterType) => {
        dispatch({ type: typeFilter, payload: ""})
    };

    const resetFilterProducts = (typeFilter: FilterType) => {
        dispatch({type: typeFilter, payload: ""})
    };


    return (
        <FilterContext.Provider value={{valueFilter, addFilterProducts, removeFilterProducts, resetFilterProducts}}>
            { children }
        </FilterContext.Provider>
    )
}

export default FilterProvider;