import { createContext } from "react";


interface StateFilterProps{
    filteringState: boolean,
    setFilteringState: (filteringState: boolean) => void,
}

const StatusFilterContext = createContext <StateFilterProps | null>(null);


export default StatusFilterContext;