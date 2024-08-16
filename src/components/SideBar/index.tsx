import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SideBarIcon from "../../assets/sidebar-icon.png";
import {
  StyledDrawer,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  StyledListItemIcon,
} from "./SideBar.style";
const SidebarMenu = ({ onItemClick }: any) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <StyledDrawer variant="permanent">
      <StyledList>
        <StyledListItemButton onClick={handleToggle}>
          <ListItemText primary="Название проекта" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </StyledListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <StyledList disablePadding>
            {[
              "Проекту",
              "Управление",
              "Объекты",
              "СМР",
              "График",
              "Мим",
              "Рабочие",
              "КапВложения",
              "Бюджет",
              "Финансирование",
              "Панорамы",
              "Камеры",
              "Поручения",
              "Контрагенты",
            ].map((text) => (
              <StyledListItemButton
                key={text}
                onClick={() => onItemClick(text)}
              >
                <StyledListItemIcon>
                  <img
                    src={SideBarIcon}
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </StyledListItemIcon>
                <ListItemText primary={text} />
              </StyledListItemButton>
            ))}
          </StyledList>
        </Collapse>
      </StyledList>
    </StyledDrawer>
  );
};

export default SidebarMenu;
