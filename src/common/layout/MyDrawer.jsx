import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu.js";
import { IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TodayIcon from "@mui/icons-material/Today";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { useNavigate } from "react-router-dom";
import { useSessionData } from "../services/Session.js";

//TODO:FIX THIS DRAWER
const MyDrawer = () => {
  const { isInSession, checkRole } = useSessionData();

  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event.key);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {!isInSession ? (
          <>
            <ListItem key={"calendario"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary={"Calendario"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"resultados"} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary={"Resultados del dia"} />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            {checkRole(
              "VICE_DECANA_EXTENSION",
              <>
                <ListItem key={"usuario"} disablePadding>
                  <ListItemButton onClick={() => navigate("/usuarios")}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Usuario"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key={"facultad"} disablePadding>
                  <ListItemButton onClick={() => navigate("/facultad")}>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Facultad"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "FEU",
              <>
                <ListItem key={"calendario"} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Calendario"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "VICE_DECANA_EXTENSION",
              <>
                <ListItem key={"deporte"} disablePadding>
                  <ListItemButton onClick={() => navigate("/deporte")}>
                    <ListItemIcon>
                      <SportsBasketballIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Deporte"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "FEU",
              <>
                <ListItem key={"topeDiario"} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TodayIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Topes Diarios"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "VICE_DECANA_EXTENSION",
              <>
                <ListItem key={"resultadoDia"} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EventAvailableIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Resultados del Dia"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "FEU",
              <>
                <ListItem key={"tablaPosiciones"} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <EqualizerIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Tabla de Posiciones"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {checkRole(
              "CAPITAN",
              <>
                <ListItem key={"deportista"} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SportsHandballIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gestionar Deportistas"} />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default MyDrawer;
