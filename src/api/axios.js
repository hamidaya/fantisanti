import axios from "axios"
const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';

export const api = axios.create({
    baseURL: 'https://api.predicthq.com/'
})

export const getEvents = async () => {
    const response = await api.get('https://api.predicthq.com/v1/events/?category=festivals&label=music%2Cfestival&limit=10&offset=10&phq_attendance=1000', {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,


        },
    })
    console.log(response)
    return response.data.results
}