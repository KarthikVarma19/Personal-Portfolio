import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { AppProvider } from "@toolpad/core/AppProvider";
import {
  DashboardLayout,
  DashboardSidebarPageItem,
} from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";

import Portfolio from "../Portfolio/Portfolio";

import styles from "./Dashboard.module.css";
import {
  CodeOutlined,
  ContactPageOutlined,
  DashboardOutlined,
  FolderOutlined,
  LinkOutlined,
  PersonOutline,
} from "@mui/icons-material";
import AboutMe from "../AboutMe/AboutMe";
import CodingStats from "../CodingStats/CodingStats";

// Tawk.io Messenger App
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const NAVIGATION = [
  {
    kind: "header",
    title: "Navigation",
  },
  {
    segment: "aboutme",
    title: "About Me",
    icon: <PersonOutline />,
  },
  {
    segment: "portfolio",
    title: "Portfolio",
    icon: <DashboardOutlined />,
  },

  {
    segment: "codingstats",
    title: "Coding Stats",
    icon: <CodeOutlined />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <FolderOutlined />,
  },
  {
    segment: "resume",
    title: "Resume",
    icon: <LinkOutlined />,
  },
  {
    segment: "contact",
    title: "Contact",
    icon: <ContactPageOutlined />,
  },
];

function CustomPageItem({ item, mini }) {
  return (
    <ListItem
      sx={(theme) => ({
        color: theme.palette.secondary.main,
        overflowX: "hidden",
      })}
    >
      {mini ? (
        <IconButton
          aria-label="custom"
          sx={(theme) => ({
            color: theme.palette.secondary.main,
          })}
        >
          <AutoAwesomeIcon />
        </IconButton>
      ) : (
        <ListItemButton>
          <ListItemIcon
            sx={(theme) => ({
              color: theme.palette.secondary.main,
            })}
          >
            <AutoAwesomeIcon />
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            sx={{
              whiteSpace: "nowrap",
            }}
          />
        </ListItemButton>
      )}
    </ListItem>
  );
}

CustomPageItem.propTypes = {
  item: PropTypes.shape({
    action: PropTypes.node,
    children: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.shape({
          kind: PropTypes.oneOf(["header"]).isRequired,
          title: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
          kind: PropTypes.oneOf(["divider"]).isRequired,
        }),
      ]).isRequired
    ),
    icon: PropTypes.node,
    kind: PropTypes.oneOf(["page"]),
    pattern: PropTypes.string,
    segment: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  mini: PropTypes.bool.isRequired,
};

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  switch (pathname) {
    case "/portfolio":
      return <Portfolio />;
    case "/aboutme":
      return <AboutMe />;
    case "/codingstats":
      return <CodingStats />;
    case "/resume":
      return <Resume />;
    case "/contact":
      return <Contact />;
    case "/projects":
      return <Projects />;
    case "/":
      return (
        <TawkMessengerReact
          propertyId="6853d3d94420ce190d172093"
          widgetId="1iu3n735u"
        />
      );
    default:
      return (
        <Box
          sx={{
            py: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography>Dashboard content for {pathname}</Typography>
        </Box>
      );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutCustomPageItems(props) {
  const router = useDemoRouter("/");

  // preview-start
  const renderPageItem = React.useCallback((item, { mini }) => {
    if (item.title === "External Link") {
      return (
        <DashboardSidebarPageItem
          item={item}
          href="https://www.mui.com/toolpad"
        />
      );
    }
    if (item.title === "Selected Item") {
      return <DashboardSidebarPageItem item={item} selected />;
    }
    if (item.title === "Disabled Item") {
      return <DashboardSidebarPageItem item={item} disabled />;
    }
    if (item.title === "Hidden Item") {
      return null;
    }
    if (item.title === "Expanded Folder") {
      return <DashboardSidebarPageItem item={item} expanded />;
    }
    if (item.title === "Custom Item") {
      return <CustomPageItem item={item} mini={mini} />;
    }

    return <DashboardSidebarPageItem item={item} />;
  }, []);
  // preview-end

  return (
    // Remove this provider when copying and pasting into your project.
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{
        logo: (
          <img
            src="https://res.cloudinary.com/karthikvarma/image/upload/v1750177387/Peronal/myprofile_bgremoved_pic.png"
            alt="KV Logo"
            className={`${styles.dashboardNavbarProfilePic}`}
          />
        ),
        title: "Karthik Varma",
        homeUrl: "/",
      }}
    >
      {/* preview-start */}
      <DashboardLayout renderPageItem={renderPageItem}>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
      {/* preview-end */}
    </AppProvider>
  );
}

DashboardLayoutCustomPageItems.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutCustomPageItems;
