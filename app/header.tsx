import { Box } from "@mui/material";
import { Link } from "react-router";

export function Header() {
  return (
    <Box sx={{ padding: '10px', backgroundColor: '#ddd', color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
      <Link to='/'>Hash</Link>
      <Link style={{ marginLeft: '20px' }} to='/block'>Block</Link>
      <Link style={{ marginLeft: '20px' }} to='/blockchain'>Blockchain</Link>
    </Box>
  )
}