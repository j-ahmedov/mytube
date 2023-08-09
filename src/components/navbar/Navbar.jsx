import { Box, Stack } from "@mui/material";
import { colors } from "../../constants/colors";
import { Link } from "react-router-dom";
import {SearchBar} from "../";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={2}
      sx={{position: "sticky", top:0, zIndex:999, background: colors.primary}}
    >
      <Link to={"/"}>
        <img src="/mytube_logo.png" alt="mytube logo" height={30} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
