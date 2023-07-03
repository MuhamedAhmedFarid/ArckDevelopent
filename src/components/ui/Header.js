import * as React from "react";
import { useState, useEffect } from "react";
import { Toolbar, Tab, Menu, MenuItem, Tabs, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
  },

  activeTab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    borderBottom: "90px solid #FFBA60",
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",

    "&:hover": {
      backgroundColor: "trasparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
    
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
  },
  drawerItemEstmate: {
    ...theme.typography.estimate,
    
  },
  appBar: {
    zIndex: theme.zIndex.modal + 0,
    [theme.breakpoints.down("md")]: {
      zIndex: theme.zIndex.modal + 1,
    },
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = navigator.userAgent.match(/iPad|iPhone|iPod/);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };
  const menuOptions = [
    { name: "Services", link: "/services", activeTab: 1, selcted: 0 },
    {
      name: "custom Software Development",
      link: "/customesoftware",
      activeTab: 1,
      selcted: 1,
    },
    {
      name: "Mobile App Development ",
      link: "/mobileapps",
      activeTab: 1,
      selcted: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeTab: 1,
      selcted: 3,
    },
  ];
  const routes = [
    { name: "Home", link: "/", activeTab: 0 },
    { name: "Services ", link: "/Services", activeTab: 1, ariaOwns:anchorEl ? "simple-menue" : undefined, ariaPopup:anchorEl ? "true" : undefined, mouseOver: (event) => handleClick(event) },
    { name: "The Revolution ", link: "/revolution", activeTab: 2 },
    { name: "About Us", link: "/about", activeTab: 3 },
    { name: "contact Us", link: "/contact", activeTab: 4 },
  ];
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeTab) {
            props.setValue(route.activeTab);
            if (route.selcted && route.selcted !== props.selcted) {
              props.setSelcted(route.selcted);
            }
          }
          break;
        case "/estimate": 
          props.setValue(5)
        break 
        default:
          break;
      }
    });
  }, [props.value, menuOptions, props.selcted, routes, props]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setOpenMenu(false);
    setAnchorEl(null);
    props.setSelcted(i);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        indicatorColor="primary"
        className={classes.tabContainer}
        onChange={handleChange}
      >
        {routes.map((route, index) => (
          <Tab className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}/>
        ))}

      </Tabs>
      <Button component={Link} to="/estimate" variant="contained" onClick={() =>  props.setValue(5)} className={classes.button}>
        free Estimate
      </Button>
      <Menu
        classes={{ paper: classes.menu }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            className={{ root: classes.menuItem }}
            component={Link}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            to={option.link}
            selcted={i === props.selcted && props.value}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.root} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeTab}`}
              button

              component={Link}
              to={route.link}
              selected={props.value === route.activeTab}
              // classes={selcted: classes.drawerItemSelected}
              // classes={{selcted: classes.drawerItemSelcted}}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeTab)
              }}
            >
              
              <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}
          <ListItem onClick={() => {
            setOpenDrawer(false)
            props.setValue(5);

          }}
          
            divider
            button
            component={Link}
            classes={{
              root:classes.drawerItemEstmate,
              selected: classes.drawerItemSelcted
            }}
            to="/estimate"
            selcted={props.value === 5}
          >
           Free  Estimate 
          </ListItem>
          

          
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.root}></div>
    </React.Fragment>
  );
}

export default Header;
