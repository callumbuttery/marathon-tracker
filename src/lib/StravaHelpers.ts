import axios from 'axios'

export async function fetchStravaData() {
    try {
        let response = await axios(`https://www.strava.com/api/v3/athlete/activities?access_token=${import.meta.env.VITE_STRAVA_KEY}`, {
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

