import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import React from "react";

interface AppThemeProps {
  children?: React.ReactNode
}

const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  return (
    <FluentProvider theme={webLightTheme} >
      {children}
    </FluentProvider >
  )
}

export default AppTheme;
