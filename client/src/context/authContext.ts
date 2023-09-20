import { createContext } from "react"

type ValueTypes = {
    isAuth: boolean;
    isLoading: boolean;
    setIsAuth: (value: boolean) => void;
}

export const AuthContext = createContext<ValueTypes>({
    isAuth: false,
    isLoading: true,
    setIsAuth: () => {},
});