import { Grid2, ListItem, ListItemText } from "@mui/material";


//Any component that receives props will need its types defined, or each prop will have to have a type. In this case we have a 
// larger "Activity[]" type that is inside of the lib folder, so we can just use that. 
type Props = {
    activities: Activity[]
}




export default function ActivityDashboard({ activities }: Props) {



    return (
        <Grid2 container>
            <Grid2 size={9}>
                <ul>
                    {activities.map((activity) => {
                        return (
                            <ListItem key={activity.id}>
                                <ListItemText>{activity.title}</ListItemText>
                            </ListItem>
                        )
                    })}
                </ul>
            </Grid2>
        </Grid2>
    )

}
