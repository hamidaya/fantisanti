import React from 'react';
import axios from "axios";
const apiKey = '4AGbP7E-4ASo0-VDfkC26YLbYr7lh1BWI-Ok4A_F';

export const api = axios.create({

    URI: 'https://api.predicthq.com/v1/'

                })

export const getPosts = async () => {
    const responds = await axios.get('./events')
    return responds.data
}

https://www.youtube.com/watch?v=ZoayCCDHFiI
