import { useState, type ReactNode } from "react";
import SearchContext from "./SearchContext"

interface SearchProviderProps {
    children: ReactNode;
}

const SearchProvider = ({children} :SearchProviderProps) => {
    const [onSearch, setOnSearch] = useState("");

    return (
        <SearchContext.Provider value={{onSearch, setOnSearch}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;