'use client'
import { createContext, ReactNode, useContext, useReducer } from 'react';

type ThemeAction =
    | { type: 'SET_COLOR'; payload: string };

type ThemeContextType = {
    bgColor: string;
    dispatch: React.Dispatch<ThemeAction>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const initialState = 'blue';

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ bgColor: state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const themeReducer = (state: string, action: ThemeAction): string => {
    switch (action.type) {
        case 'SET_COLOR':
            console.log(`context`);
            return action.payload; // Set the color from the payload
        default:
            return state;
    }
};