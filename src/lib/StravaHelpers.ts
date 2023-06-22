import axios from 'axios'

export async function fetchStravaData() {
    try {

        
        const response = await axios(`https://l23i44mhna.execute-api.eu-west-1.amazonaws.com/strava`, {
            method: 'GET',
            headers: {
                'x-api-key': import.meta.env.VITE_API_GATEWAY_KEY,
            }
        })

        if (!response.data) {
            throw new Error('Failed to get strava data');
        }

        return(response.data);

    } catch (e) {
        alert(e);
    }
}

export function distanceCalculator(distance: number) {
    try {
        return (Math.floor(distance * 100) / 100000).toFixed(2)
    }  catch (e) {
        alert(e);
    }
}

