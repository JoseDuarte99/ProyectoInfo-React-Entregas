import type { ReactNode } from "react";
import CartProvider from "./CartProvider";
import SearchProvider from "./SearchProvider";
import FilterProvider from "./FilterProvider";
import StatusFilterProvider from "./StatusFilterProvider";

interface AppProviderProps {
    children: ReactNode;
}


const AppProviders = ({ children }: AppProviderProps) => (
    <CartProvider>
        <SearchProvider>
            <StatusFilterProvider>
                <FilterProvider>
                    {children}
                </FilterProvider>
            </StatusFilterProvider>
        </SearchProvider>
    </CartProvider>
);

export default AppProviders