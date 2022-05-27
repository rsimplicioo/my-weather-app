import React, { ReactNode } from "react";
import { LocationProvider } from "./location";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return(
    <LocationProvider>
      { children }
    </LocationProvider>
  )
}

export { AppProvider };