import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";
import { useLocation } from "react-router";


export const useActivities = (id?: string) => {
    const queryClient = useQueryClient();
    const location = useLocation();

    //GET fetch
    //React query code, to go and fetch our activities array and then store it in cache and continue to update it
    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        },
        //The below means that it will only be executed when we are on the /activities url path
        enabled: !id && location.pathname === '/activities'
        // This gives us the ability to control how long until react query marks the cache data as stale (the below is 5 minutes), the stale time does mean that until 5 mintues are up, the new activities added will not be updated until the stale time runs out
        // staleTime: 1000 * 60 * 5
    })


    //GET fetch by ID
    const { data: activity, isLoading: isLoadingActivity } = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`/activities/${id}`);
            return response.data
        },
        //The line below is us telling React Query to not run the fetch every time, but only if we have a specific Id passed in
        enabled: !!id
    })


    //PUT fetch to edit or update an activity
    const updateActivity = useMutation({

        mutationFn: async (activity: Activity) => {
            await agent.put('/activities', activity)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({     //this is telling react query cache system, that when an activity is updated. To invalidate the cache of ['activities'] and go refetch it basically
                queryKey: ['activities']
            })
        }
    })

    //POST fetch
    const createActivity = useMutation({

        mutationFn: async (activity: Activity) => {
            const response = await agent.post('/activities', activity)
            return response.data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({     //this is telling react query cache system, that when an activity is updated. To invalidate the cache of ['activities'] and go refetch it basically
                queryKey: ['activities']
            })
        }
    })

    //DELETE fetch
    const deleteActivity = useMutation({

        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({     //this is telling react query cache system, that when an activity is updated. To invalidate the cache of ['activities'] and go refetch it basically
                queryKey: ['activities']
            })
        }
    })



    return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity,
        activity,
        isLoadingActivity
    }





}