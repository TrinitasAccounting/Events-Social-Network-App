import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";



//Any component that receives props will need its types defined, or each prop will have to have a type. In this case we have a 
// larger "Activity[]" type that is inside of the lib folder, so we can just use that. 
// type Props = {
//     // activities: Activity[],
//     // selectActivity: (id: string) => void,
//     // cancelSelectActivity: () => void,
//     // selectedActivity?: Activity,
//     // openForm: (id: string) => void,
//     // closeForm: () => void,
//     // editMode: boolean,
//     // submitForm: (activity: Activity) => void,
//     // deleteActivity: (id: string) => void
// }

//would be passed to the component by destructuring => { activities, selectActivity, cancelSelectActivity, selectedActivity, openForm, closeForm, editMode }: Props




export default function ActivityDashboard() {




    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList />
            </Grid2>
            <Grid2 size={5}>
                Activity Filters Go Here
            </Grid2>
        </Grid2>
    )

}
