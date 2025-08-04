import { createContext, type Dispatch, type SetStateAction } from "react";

interface SearchProviderProps {
    onSearch: string;
    setOnSearch: Dispatch<SetStateAction<string>>
}

const SearchContext = createContext<SearchProviderProps | null>(null);

export default SearchContext;

