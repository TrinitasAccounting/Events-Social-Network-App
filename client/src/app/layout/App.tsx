
import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";





function App() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false);


  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

  }, [])


  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  };


  //Opening the form to Create or Edit an activity
  const handleOpenForm = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    }
    else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  //Front end only form submission
  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(activities.map(x => x.id === activity.id ? activity : x)
      )
    }
    else {
      const newActivity = { ...activity, id: activities.length.toString() }
      setSelectedActivity(newActivity)
      setActivities([...activities, newActivity])
    }

    setEditMode(false)
  }


  //Deleting an activity
  const handleDelete = (id: string) => {
    const filteredActivities = activities.filter((act) => {
      return (act.id !== id)
    })

    setActivities(filteredActivities)
  }




  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      {/* The CssBaseLine removes the tiny outside padding that the browser has set by default */}
      <CssBaseline />

      <NavBar openForm={handleOpenForm} />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleFormClose}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  )
}

export default App
