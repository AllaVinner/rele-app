import { makeStyles, Title1, tokens } from "@fluentui/react-components";
import React from "react";

interface AppNavbarProps {
  children?: React.ReactNode
}

const NAVBAR_HEIGHT = 55;


const useStyles = makeStyles({
  navbar: {
    display: "flex",
    backgroundColor: tokens.colorBrandBackground,
    boxShadow: tokens.shadow2,
    paddingInline: tokens.spacingHorizontalS,
    minHeight: `${NAVBAR_HEIGHT}px`,
    height: `${NAVBAR_HEIGHT}px`,
    alignItems: "center",
  }
})


const AppNavbar: React.FC<AppNavbarProps> = ({ children }) => {
  const styles = useStyles();
  return (
    <nav className={styles.navbar}>
      <Title1> Main </Title1>
      {children}
    </nav>
  )
}

export default AppNavbar;
