
import { Box, Container, CssBaseline } from "@mui/material";
// import axios from "axios";

import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../../features/home/HomePage";
// import { useQuery } from "@tanstack/react-query";






function App() {

  // const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  // const [editMode, setEditMode] = useState(false);

  // const { activities, isPending } = useActivities();


  const location = useLocation();





  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      {/* The CssBaseLine removes the tiny outside padding that the browser has set by default */}
      <CssBaseline />
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container maxWidth='xl' sx={{ mt: 3 }}>
            <Outlet />
          </Container>
        </>
      )}
    </Box>
  )
}

export default App
