import { createContext, FC, PropsWithChildren, useContext } from "react";

const TestContext = createContext({});

export const TestContextProvider: FC<PropsWithChildren> = ({ children }) => {
    return <TestContext.Provider value={{}}>
        {children}
    </TestContext.Provider>
}

export const useTestContext = () => {
    const context = useContext(TestContext);

    if (!context) {
        throw new Error("Missing provider")
    }

    return context;
}
