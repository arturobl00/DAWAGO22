import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockFifa } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Fifa = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="FIFA"
        subtitle="List of Mundial Data"
      />
  </Box>
  );
};

export default Fifa;