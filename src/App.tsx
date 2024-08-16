import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import SidebarMenu from "./components/SideBar";
import DataTable from "./components/DataTable";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: black;
          color: white;
        }
      `,
    },
  },
});

function App() {
  const defaultSelectedItem = "Проекту";
  const [selectedItem, setSelectedItem] = useState<string>(defaultSelectedItem);

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <SidebarMenu onItemClick={handleItemClick} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 2,
            backgroundColor: "black",
            color: "white",
          }}
        >
          {selectedItem && <DataTable />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
