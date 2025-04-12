import { makeStyles } from "@fluentui/react-components";
import React from "react";

interface AppBaseProps {
  children?: React.ReactNode
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    minHeight: 0,
    minWidth: 0,
    height: "100%",
  }
})


const AppBase: React.FC<AppBaseProps> = ({ children }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}

export default AppBase;
