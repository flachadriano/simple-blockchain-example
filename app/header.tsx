import { Box } from "@mui/material";
import { Link } from "react-router";

export function Header() {
  return (
    <Box>
      <Link to='/'>Hash</Link>
      <Link to='/block'>Block</Link>
      <Link to='/blockchain'>Blockchain</Link>
    </Box>
  )
}