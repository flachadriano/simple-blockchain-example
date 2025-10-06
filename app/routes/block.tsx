import { Box, Typography } from "@mui/material";
import { BlockComponent } from "~/components/block";
import { Block } from "~/models/block";

export default function BlockPage() {
  return (
    <Box>
      <Typography variant="h3">Block</Typography>
      <BlockComponent currentBlock={new Block()} />
    </Box>
  );
}
