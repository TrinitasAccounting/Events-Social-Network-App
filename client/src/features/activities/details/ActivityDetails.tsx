import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

// type Props = {
//     activity: Activity,
//     cancelSelectActivity: () => void,
//     openForm: (id: string) => void
// }


export default function ActivityDetails() {
    const navigate = useNavigate();
    //The useParams name of "id" need to match inside of our Routes, what place holder we have used for it. Using the ":XXXXX" in the route
    const { id } = useParams();

    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <Typography>...Loading</Typography>


    if (!activity) return <Typography>Activity not found</Typography>


    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia
                component='img'
                src={`images/categoryImages/${activity.category}.jpg`}
            />
            <CardContent>
                <Typography variant='h5'>{activity.title}</Typography>
                <Typography variant='subtitle1' fontWeight='light'>{activity.date}</Typography>
                <Typography variant='body1'>{activity.description}</Typography>
            </CardContent>
            <CardActions>

                <Button onClick={() => navigate(`/manage/${activity.id}`)} color='primary'>Edit</Button>
                <Button onClick={() => navigate('/activities')} color='inherit'>Cancel</Button>
            </CardActions>

        </Card>
    )
}
