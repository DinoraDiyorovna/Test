import styled from "@emotion/styled";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
const drawerWidth = 240;
export const StyledDrawer = styled(Drawer)`
  width: ${drawerWidth}px;
  flex-shrink: 0;

  & .MuiDrawer-paper {
    width: ${drawerWidth}px;
    box-sizing: border-box;
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
  }
`;
export const StyledListItemButton = styled(ListItemButton)`
  padding-left: 32px; /* This represents the 'pl: 4' from MUI spacing scale */
`;
export const StyledList = styled(List)`
  padding: 0;
`;

export const StyledListItem = styled(ListItem)`
  padding-left: 32px; /* This represents the 'pl: 4' from MUI spacing scale */
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  display: flex;
  align-items: center;
`;
