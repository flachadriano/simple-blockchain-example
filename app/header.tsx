import { Box } from "@mui/material";
import { Link } from "react-router";

export function Header() {
  return (
    <Box sx={{ margin: '10px' }}>
      <Link to='/'>Hash</Link>
      <Link style={{ marginLeft: '20px' }} to='/block'>Block</Link>
      <Link style={{ marginLeft: '20px' }} to='/blockchain'>Blockchain</Link>
    </Box>
  )
}