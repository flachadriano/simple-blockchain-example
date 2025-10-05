import { Box, TextareaAutosize, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import sha256 from 'crypto-js/sha256';

export default function HashPage() {
  const [data, setData] = useState('');
  const [hash, setHash] = useState('');

  useEffect(() => setHash(sha256(data).toString()), [data]);

  return (
    <>
      <h1>Hash SHA256</h1>
      <hr style={{ marginBottom: '20px' }} />
      <Box sx={{ color: '#000', backgroundColor: '#ddd', padding: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ minWidth: '100px' }}>Data</Typography>
          <TextareaAutosize style={{ backgroundColor: '#fff', padding: '3px', flex: '1' }} minRows={10} value={data} onChange={evt => setData(evt.target.value)} />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'false', marginTop: '20px' }}>
          <Typography sx={{ minWidth: '100px' }}>Hash</Typography>
          <Typography sx={{ backgroundColor: '#fff', padding: '3px', flex: '1' }}>{ hash }</Typography>
        </Box>
      </Box>
    </>
  )
}
