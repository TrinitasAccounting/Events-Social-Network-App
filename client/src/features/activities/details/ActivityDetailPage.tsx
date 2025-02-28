import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

// type Props = {
//     activity: Activity,
//     cancelSelectActivity: () => void,
//     openForm: (id: string) => void
// }


export default function ActivityDetails() {

    //The useParams name of "id" need to match inside of our Routes, what place holder we have used for it. Using the ":XXXXX" in the route
    const { id } = useParams();

    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <Typography>...Loading</Typography>


    if (!activity) return <Typography>Activity not found</Typography>



    return (
        <Grid2 container spacing={3}>
            <Grid2 size={8}>
                <ActivityDetailsHeader activity={activity} />
                <ActivityDetailsInfo activity={activity} />
                <ActivityDetailsChat />
            </Grid2>
            <Grid2 size={4}>
                <ActivityDetailsSidebar />
            </Grid2>
        </Grid2>
    )
}
