import * as React from "react";
import {
  AppItem,
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavItemValue,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
  OnNavItemSelectData,
} from "@fluentui/react-nav-preview";
import {
  Button,
  Label,
  Switch,
  Tooltip,
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  BoxMultiple20Filled,
  BoxMultiple20Regular,
  DataArea20Filled,
  DataArea20Regular,
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular,
  HeartPulse20Filled,
  HeartPulse20Regular,
  MegaphoneLoud20Filled,
  MegaphoneLoud20Regular,
  NotePin20Filled,
  NotePin20Regular,
  People20Filled,
  People20Regular,
  PeopleStar20Filled,
  PeopleStar20Regular,
  Person20Filled,
  PersonLightbulb20Filled,
  PersonLightbulb20Regular,
  Person20Regular,
  PersonSearch20Filled,
  PersonSearch20Regular,
  PreviewLink20Filled,
  PreviewLink20Regular,
  bundleIcon,
  PersonCircle32Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "100%",
  },
  nav: {
    minWidth: "200px",
  },
  closedSidebar: {
    minWidth: "40px",
    width: "60px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

const Person = bundleIcon(Person20Filled, Person20Regular);
const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Announcements = bundleIcon(MegaphoneLoud20Filled, MegaphoneLoud20Regular);
const EmployeeSpotlight = bundleIcon(
  PersonLightbulb20Filled,
  PersonLightbulb20Regular
);
const Search = bundleIcon(PersonSearch20Filled, PersonSearch20Regular);
const PerformanceReviews = bundleIcon(
  PreviewLink20Filled,
  PreviewLink20Regular
);
const JobPostings = bundleIcon(NotePin20Filled, NotePin20Regular);
const Interviews = bundleIcon(People20Filled, People20Regular);
const HealthPlans = bundleIcon(HeartPulse20Filled, HeartPulse20Regular);
const TrainingPrograms = bundleIcon(BoxMultiple20Filled, BoxMultiple20Regular);
const CareerDevelopment = bundleIcon(PeopleStar20Filled, PeopleStar20Regular);
const Analytics = bundleIcon(DataArea20Filled, DataArea20Regular);
const Reports = bundleIcon(
  DocumentBulletListMultiple20Filled,
  DocumentBulletListMultiple20Regular
);


interface ClosedSidebarProps {
  setSidebarOpen: (state: boolean) => void
}

const ClosedSidebar: React.FC<ClosedSidebarProps> = (props) => {
  const styles = useStyles();
  const onHamburgerClick = () => {
    console.log("CLOSE SIDEBAR")
    props.setSidebarOpen(true)
  }
  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={onHamburgerClick} />
      </Tooltip>
    );
  };
  return (
    <div className={styles.root}>
      <NavDrawer
        type={"inline"}
        open={true}
        className={styles.closedSidebar}
      >
        <NavDrawerHeader >{renderHamburgerWithToolTip()}</NavDrawerHeader>
        <NavDrawerBody>
        </NavDrawerBody>
      </NavDrawer>
    </div>

  )

}

interface OpenSidebarProps {
  setSidebarOpen: (state: boolean) => void
}

const OpenSidebar: React.FC<OpenSidebarProps> = (props) => {
  const styles = useStyles();

  const onHamburgerClick = () => {
    props.setSidebarOpen(false)
  }

  const [openCategories, setOpenCategories] = React.useState<NavItemValue[]>([
    "6",
    "11",
  ]);
  const [selectedCategoryValue, setSelectedCategoryValue] = React.useState<
    string | undefined
  >("6");
  const [selectedValue, setSelectedValue] = React.useState<string>("7");

  const handleCategoryToggle = (
    _ev: Event | React.SyntheticEvent<Element, Event>,
    data: OnNavItemSelectData
  ) => {
    if (data.value === undefined && data.categoryValue) {
      // we're just opening it,
      setOpenCategories([data.categoryValue as string]);
    }
    // if it's already open, remove it from the list
    if (openCategories.includes(data.categoryValue as string)) {
      setOpenCategories([]);
    } else {
      // otherwise add it
      setOpenCategories([data.categoryValue as string]);
    }
  };

  const handleItemSelect = (
    _ev: Event | React.SyntheticEvent<Element, Event>,
    data: OnNavItemSelectData
  ) => {
    setSelectedCategoryValue(data.categoryValue as string);
    setSelectedValue(data.value as string);
  };

  const renderHamburgerWithToolTip = () => {
    return (
      <Tooltip content="Navigation" relationship="label">
        <Hamburger onClick={onHamburgerClick} />
      </Tooltip>
    );
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        onNavCategoryItemToggle={handleCategoryToggle}
        onNavItemSelect={handleItemSelect}
        tabbable={true} // enables keyboard tabbing
        openCategories={openCategories}
        selectedValue={selectedValue}
        selectedCategoryValue={selectedCategoryValue}
        type={"inline"}
        open={true}
        className={styles.nav}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>
        <NavDrawerBody>
          <AppItem icon={<PersonCircle32Regular />} as="a">
            Contoso HR
          </AppItem>
          <NavItem icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
          <NavItem icon={<Dashboard />} value="1">
            Dashboard
          </NavItem>
          <NavItem icon={<Announcements />} value="2">
            Announcements
          </NavItem>
          <NavItem icon={<EmployeeSpotlight />} value="3">
            Employee Spotlight
          </NavItem>
          <NavItem icon={<Search />} value="4">
            Profile Search
          </NavItem>
          <NavItem icon={<PerformanceReviews />} value="5">
            Performance Reviews
          </NavItem>
          <NavSectionHeader>Employee Management</NavSectionHeader>
          <NavCategory value="6">
            <NavCategoryItem icon={<JobPostings />}>
              Job Postings
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="7">Openings</NavSubItem>
              <NavSubItem value="8">Submissions</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavItem icon={<Interviews />} value="9">
            Interviews
          </NavItem>

          <NavSectionHeader>Benefits</NavSectionHeader>
          <NavItem icon={<HealthPlans />} value="10">
            Health Plans
          </NavItem>
          <NavCategory value="11">
            <NavCategoryItem icon={<Person20Regular />} value="12">
              Retirement
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="13">Plan Information</NavSubItem>
              <NavSubItem value="14">Fund Performance</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>

          <NavSectionHeader>Learning</NavSectionHeader>
          <NavItem icon={<TrainingPrograms />} value="15">
            Training Programs
          </NavItem>
          <NavCategory value="16">
            <NavCategoryItem icon={<CareerDevelopment />}>
              Career Development
            </NavCategoryItem>
            <NavSubItemGroup>
              <NavSubItem value="17">Career Paths</NavSubItem>
              <NavSubItem value="18">Planning</NavSubItem>
            </NavSubItemGroup>
          </NavCategory>
          <NavDivider />
          <NavItem target="_blank" icon={<Analytics />} value="19">
            Workforce Data
          </NavItem>
          <NavItem icon={<Reports />} value="20">
            Reports
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
    </div >
  );
};

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  if (!sidebarOpen) {
    return (
      <ClosedSidebar setSidebarOpen={setSidebarOpen} />
    )
  } else {
    return (
      <OpenSidebar setSidebarOpen={setSidebarOpen} />
    )

  }
}

export default Sidebar;
