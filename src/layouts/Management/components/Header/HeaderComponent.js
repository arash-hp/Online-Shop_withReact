import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PATHS } from "../../../../configs/RoutesConfig";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "14px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export function HeaderComponent() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          پنل مدیریت
        </Typography>
          <div className={classes.navlinks}>
            <Link to={PATHS.DASHBOARD} className={classes.link}>
              کالاها
            </Link>
            <Link to={PATHS.STOCK} className={classes.link}>
              موجودی و  قیمت
            </Link>
            <Link to={PATHS.ORDERS} className={classes.link}>
              سفارش ها
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
