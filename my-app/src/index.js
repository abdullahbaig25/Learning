import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assests/styling/theme";

function RootComponent() {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </React.StrictMode>
    );
}

createRoot(document.getElementById('root')).render(<RootComponent />);
