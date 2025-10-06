import { Box, Button, Input, TextareaAutosize, Typography } from "@mui/material";
import { useState } from "react";
import { Block } from "~/models/block";

type BlockComponentProps = {
  currentBlock: Block
}

export function BlockComponent({ currentBlock} : BlockComponentProps) {
  const [block] = useState(currentBlock);
  const [,setRefresh] = useState(true);

  return (
    <Box>
      <Box sx={{ color: '#000', backgroundColor: '#ddd', padding: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ minWidth: '100px' }}>Block</Typography>
          <Typography sx={{ marginRight: '5px' }}>#</Typography>
          <Input sx={{ backgroundColor: '#fff', flex: '1' }} 
            value={block.getSequence()} 
            onChange={evt => { block.setSequence(evt.target.value); setRefresh(old => !old) }} />
        </Box>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <Typography sx={{ minWidth: '100px' }}>Nonce</Typography>
          <Input sx={{ backgroundColor: '#fff', flex: '1' }} 
            value={block.getNone()} 
            onChange={evt => { block.setNonce(evt.target.value); setRefresh(old => !old) }} />
        </Box>
        <Box sx={{ display: 'flex', marginTop: '20px' }}>
          <Typography sx={{ minWidth: '100px' }}>Data</Typography>
          <TextareaAutosize style={{ backgroundColor: '#fff', flex: '1' }} minRows={10}
            value={block.getData()} 
            onChange={evt => { block.setData(evt.target.value); setRefresh(old => !old) }} />
        </Box>
        <Box sx={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
          <Typography sx={{ minWidth: '100px' }}>Previous</Typography>
          <Typography>{ block.getPreviousHash() }</Typography>
        </Box>
        <Box sx={{ display: 'flex', marginTop: '20px', marginBottom: '20px' }}>
          <Typography sx={{ minWidth: '100px' }}>Hash</Typography>
          <Typography>{ block.getHash() }</Typography>
          <Typography sx={{ marginLeft: '20px' }}>{block.isHashValid() ? '-> Is valid' : '-> Is invalid'}</Typography>
        </Box>
        <Button variant="contained" onClick={() => { block.mine(); setRefresh(old => !old) }}>Mine Block</Button>
      </Box>
    </Box>
  );
}