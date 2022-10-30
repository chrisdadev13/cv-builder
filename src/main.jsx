import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./components/utils/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
)
