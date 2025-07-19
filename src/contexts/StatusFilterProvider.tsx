import { useState, type ReactNode } from "react";
import StatusFilterContext from "./StatusFilterContext";


interface StatusFilterProviderProps {
    children: ReactNode;
};


function StatusFilterProvider ( {children}: StatusFilterProviderProps) {
    const [filteringState, setFilteringState] = useState(false);

    return (
        <StatusFilterContext.Provider value = {{filteringState, setFilteringState}}>
            { children }
        </StatusFilterContext.Provider>

    )

}

export default StatusFilterProvider;