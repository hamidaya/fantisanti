import axios from "axios"
const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';

//Doe een API call naar de backend van Predict (data).
export const api = axios.create({
    baseURL: 'https://api.predicthq.com/'
})

//Haal events op met de volgende endpoint met de functie getEvents.
export const getEvents = async () => {
    const response = await api.get('https://api.predicthq.com/v1/events/?place.scope=2641170&active.gte=2023-03-01&active.lte=2023-03-31&category=festivals&sort=rank', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,


        },
    })
    console.log(response)
    //Sla de array (results) op met de responds call hierboven in data.
    return response.data.results
}