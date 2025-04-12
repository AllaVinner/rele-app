import { FluentProvider, makeStyles, webDarkTheme } from "@fluentui/react-components";
import React from "react";

const useStyles = makeStyles({
  theme: {
    display: "initial",
    position: "relative",
  }
})

interface AppThemeProps {
  children?: React.ReactNode
}

const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  const styles = useStyles();
  return (
    <FluentProvider theme={webDarkTheme} className={styles.theme}>
      {children}
    </FluentProvider >
  )
}

export default AppTheme;
