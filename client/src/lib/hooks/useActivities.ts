import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";


export const useActivities = () => {
    const queryClient = useQueryClient()

    //GET fetch
    //React query code, to go and fetch our activities array and then store it in cache and continue to update it
    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        }
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
            await agent.post('/activities', activity)
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
        deleteActivity
    }





}