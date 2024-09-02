'use client'
import { createContext } from "react";

type ThemeContextType = {
    bgColor: string;
    dispatch: React.Dispatch<{ type: string; payload?: string }>; 
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themeReducer = (state: string, action: { type: string; payload?: string }): string => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            console.log(`context`);
            return action.payload || state;
        default:
            return state;
    }
};