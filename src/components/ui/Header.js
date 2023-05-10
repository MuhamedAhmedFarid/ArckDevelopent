import * as React from "react";
import { useState } from "react";
import { Toolbar, Tab, Menu, MenuItem, Tabs,AppBar } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

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
  },
  logo: {
    height: "7em",
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
}));

function Header(props) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpend] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpend(true);
  };
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpend(false);
  };
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} />
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
              open={open}
              onClose={handleClose}
              MenuListProps={{onMouseLeave: handleClose}}
              elevation={0}
            >
              <MenuItem classes={{root: classes.menuItem}} component={Link} to='/service' onClick={() => {handleClose(); setActiveTab(1)}}>
              service
              </MenuItem>
              <MenuItem classes={{root: classes.menuItem}} component={Link} to='/customesoftware' onClick={() => {handleClose(); setActiveTab(1)}}>
                Custom Software Development
              </MenuItem>
              <MenuItem classes={{root: classes.menuItem}} component={Link} to='/mobileapps' onClick={() => {handleClose(); setActiveTab(1)}}>
                Mobile App Development
              </MenuItem>
              <MenuItem classes={{root: classes.menuItem}} component={Link} to='/websites' onClick={() => {handleClose(); setActiveTab(1)}}>
                Website Development
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.root}></div>
    </React.Fragment>
  );
}

export default Header;
