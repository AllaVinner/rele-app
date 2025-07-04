import { makeStyles, tokens, Label } from "@fluentui/react-components";
import Introduction from "./pages/introduction.tsx";
import Page from "./pages/plotly_example.tsx"
import APIExample from "./pages/APIExample.tsx"
import React, { useState } from "react";
import Sidebar from "./Sidebar.tsx";

// TODO: REMMEBER TO DO THIS

interface AppRootProps {
  children?: React.ReactNode
}

// interface Component extends INavLink {
//   content: React.ReactNode,
//   links?: Component[],
// }

// If you have an array of objects that each have a top-level `links` array:
// interface ComponentConfig extends INavLinkGroup {
//   links: Component[];
// }


// function getComponent(key?: string, components?: Component[]): Component | null {
//   // Base case: if components is undefined or empty
//   if (!key || !components || components.length === 0) {
//     return null;
//   }
//
//   // Search in the current level
//   for (const component of components) {
//     // Check if current component matches the key
//     if (component.key === key) {
//       return component;
//     }
//
//     // If component has links, search in them recursively
//     if (component.links && component.links.length > 0) {
//       const found = getComponent(key, component.links);
//       if (found) {
//         return found;
//       }
//     }
//   }
//
//   // If we get here, no component with matching key was found
//   return null;
// }

const defaultComponent = <div>Not Found</div>

// const navGroups: ComponentConfig[] = [
//   {
//     links: [
//       {
//         name: 'Introduction',
//         url: '',
//         key: 'introduction',
//         icon: 'ViewDashboard',
//         content: <Introduction />,
//       },
//       {
//         name: 'Plotly Example',
//         url: '',
//         key: 'plotly-example',
//         icon: 'ViewDashboard',
//         content: <Page />,
//       },
//       {
//         name: 'API Example',
//         url: '',
//         key: 'api-example',
//         icon: 'ArrowCircleUpRightFilled',
//         content: <APIExample />,
//       },
//       {
//         name: 'Dashboard',
//         url: '',
//         key: 'dashboard',
//         icon: 'ViewDashboard',
//         content: <div><h2>Dashboard</h2><p>Welcome to your dashboard overview.</p></div>,
//       },
//       {
//         name: 'Products',
//         url: '',
//         key: 'products',
//         content: defaultComponent,
//         icon: 'ShoppingCart',
//         links: [
//           { name: 'Electronics', key: 'electronics', content: defaultComponent, url: '' },
//           { name: 'Clothing', key: 'clothing', content: defaultComponent, url: '' },
//           { name: 'Home Goods', key: 'homegoods', content: defaultComponent, url: '' },
//         ],
//         isExpanded: true,
//       },
//       {
//         name: 'Customers',
//         url: '',
//         key: 'customers',
//         icon: 'People',
//         content: defaultComponent,
//         links: [
//           { name: 'Active Users', key: 'active-users', content: defaultComponent, url: '' },
//           { name: 'New Signups', key: 'new-signups', content: defaultComponent, url: '' },
//         ],
//       },
//     ],
//   },
// ];
//

const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    minHeight: 0,
    minWidth: 0,
    height: "100vh",
    color: tokens.colorStrokeFocus2
  },
  navbar: {
    display: "flex",
    backgroundColor: tokens.colorBrandBackground,
    padding: "0 20px",
    height: "60px",
    alignItems: "center",
    color: "red",
  },
  title: {
    fontSize: tokens.fontSizeHero800,
    color: tokens.colorStrokeFocus1,
  },
  appContent: {
    display: "flex",
    flex: 1,
    overflow: "hidden",
  },
  sidebar: {
    // minWidth: "250px",
    // width: "250px",
    height: "100%",
    overflowY: "auto",
    backgroundColor: tokens.colorSubtleBackground,
    borderRight: tokens.colorBrandStroke2Contrast,
  }
})


const AppRoot: React.FC<AppRootProps> = (_children) => {
  const styles = useStyles();
  // const [selectedKey, setSelectedKey] = useState(navGroups[0].links[0].key);

  // const handleNavLinkClick = (_ev: any, item?: INavLink) => {
  //   if (item && item.key) {
  //     setSelectedKey(item.key);
  //   }
  // };

  return (
    <div className={styles.appContainer}>
      <div className={styles.navbar}>
        <Label className={styles.title} >
          Main
        </Label>
      </div>
      <div className={styles.appContent}>
        <div className={styles.sidebar}>
          <Sidebar >
          </Sidebar>
        </div>
      </div>
    </div>
  )
}

export default AppRoot;
