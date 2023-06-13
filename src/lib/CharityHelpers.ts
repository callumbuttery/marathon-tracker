import axios from 'axios'

export async function getCharityData() {
    try {

        const response = await axios(`https://0gezxa7hi3.execute-api.eu-west-1.amazonaws.com/charity`, {
            method: 'GET',
            headers: {
                'x-api-key': import.meta.env.VITE_API_GATEWAY_CHARITY_KEY,
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