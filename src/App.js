import Index from "./Components/Index";
import { Box } from '@mui/material'

function App() {
  return (
    <>
      <Box height='100vh' width='100vw' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Index />
      </Box>
      <Box height='768px' width='1366px' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Index />
      </Box>
    </>
  );
}

export default App;
