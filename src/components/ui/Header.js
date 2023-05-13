import * as React from "react";
import { useState } from "react";
import { Toolbar, Tab, Menu, MenuItem, Tabs, AppBar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em"
    }
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
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
  
    "&:hover" : {
      backgroundColor: "trasparent"
    }
  },
  drawer: {
    backgroundColor : theme.palette.common.arcBlue
  },
  drawerItem : {
    
  }
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme()
  const iOS = navigator.userAgent.match(/iPad|iPhone|iPod/);
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false)
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selcted, setSelcted] = useState(0)
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  // useEffect(() => {

  // },[])
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
    setOpenMenu(false)
    setAnchorEl(null)
    setSelcted(i)
  }

  const menuOptions = [{ name: "Services", link: "/services" }, { name: "custom Software Development ", link: "/customesoftware" }, { name: "Mobile App Development ", link: "/mobileapps" }, { name: "Website Development", link: "/websites" }, {name: "contact Us", link: "/con"}]
  const tabsOptions = [{ name: "Home", link: "/" }, { name: "Services ", link: "/Services" }, { name: "The Revolution ", link: "/revolution" }, { name: "Website Development", link: "/websites" }, {name: "About Ua", link: "/about"}, {name: "contact Us", link: "/contact"}]
  const tabs = (
    <React.Fragment>
      <Tabs
        value={activeTab}
        indicatorColor="primary"
        className={classes.tabContainer}
        onChange={handleTabChange}
      >
        <Tab
          label="Home"
          component={Link}
          to="/"
          className={activeTab === 0 ? classes.tab : classes.tab}
        />
        <Tab
          className={activeTab === 1 ? classes.tab : classes.tab}
          component={Link}
          to="/services"
          label="Services"
          aria-owns={anchorEl ? "simple-menue" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={event => handleClick(event)}
        />
        <Tab
          className={activeTab === 2 ? classes.tab : classes.tab}
          component={Link}
          to="/revolution"
          label="The Revolution"
        />
        <Tab
          className={activeTab === 3 ? classes.tab : classes.tab}
          component={Link}
          to="/about"
          label="About Us"
        />
        <Tab
          className={activeTab === 4 ? classes.tab : classes.tab}
          component={Link}
          to="/contact"
          label="Contact Us"
        />
      </Tabs>
      <Button variant="contained" className={classes.button}>
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
          <MenuItem key={option.name} className={{ root: classes.menuItem }} component={Link} onClick={(event) => { handleMenuItemClick(event, i); setActiveTab(1); handleClose() }} to={option.link} selcted={i === selcted} >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer classes={{paper: classes.drawer }} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <List disablePadding>
          {tabsOptions.map((item, i) => (
            <ListItem onClick={() => setOpenDrawer(false)} divider button component={Link} to={item.link} >
              <ListItemText className={classes.drawerItem} disableTypography>
              {item.name}
              </ListItemText>
            </ListItem>
          ))}
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
  )
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
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
