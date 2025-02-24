
import { Box, Container, CssBaseline } from "@mui/material";
// import axios from "axios";

import NavBar from "./NavBar";
import { Outlet } from "react-router";
// import { useQuery } from "@tanstack/react-query";






function App() {

  // const [activities, setActivities] = useState<Activity[]>([]);
  // const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  // const [editMode, setEditMode] = useState(false);

  // const { activities, isPending } = useActivities();









  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      {/* The CssBaseLine removes the tiny outside padding that the browser has set by default */}
      <CssBaseline />

      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  )
}

export default App
