import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { BlockComponent } from "~/components/block";
import { Blockchain } from "~/models/blockchain";

export default function BlockchainPage() {
  const [blockchain] = useState(new Blockchain);
  const [,setRefresh] = useState(false);

  return (
    <Box>
      <Typography variant="h3">Blockchain</Typography>
      <Button variant="contained" onClick={() => { blockchain.addBlock(); setRefresh(old => !old) }}>
        Add block
      </Button>
      <Button sx={{ marginLeft: '20px' }} variant="contained" onClick={() => { blockchain.refresh(); setRefresh(old => !old) }}>
        Refresh states
      </Button>
      <Box>
        {blockchain.getBlocks().map(block => 
          <Box sx={{ marginTop: '20px' }}>
            <BlockComponent currentBlock={block} />
          </Box>
        )}
      </Box>
    </Box>
  );
}