import axios from 'axios'

export async function fetchStravaData() {
    try {

        
        const response = await axios(`https://l23i44mhna.execute-api.eu-west-1.amazonaws.com/strava`, {
            method: 'GET',
        })

        if (!response.data) {
            throw new Error('Failed to get strava data');
        }

        return(response.data);

    } catch (e) {
        alert(e);
    }
}

