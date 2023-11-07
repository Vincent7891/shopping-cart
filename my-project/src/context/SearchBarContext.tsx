import { useState,createContext, useContext, ReactNode} from "react";
import { SearchPage } from "../pages/SearchPage";


type SearchBarContext = {
    openSearch: () => void,
    closeSearch: () => void

}

const SearchBarContext = createContext({} as SearchBarContext)

export function useSearchBar() {
    return useContext(SearchBarContext)
}

type SearchBarProviderProps = {
    children: ReactNode
}

export function SearchBarProvider({children}:SearchBarProviderProps){
    const [isOpen, setIsOpen] = useState(false)
    const openSearch = () => setIsOpen(true)
    const closeSearch = () => setIsOpen(false)

    return(
        <SearchBarContext.Provider value = {{openSearch,closeSearch}}>
            {children}
            <SearchPage isOpen = {isOpen}></SearchPage>
        </SearchBarContext.Provider>
    )
}