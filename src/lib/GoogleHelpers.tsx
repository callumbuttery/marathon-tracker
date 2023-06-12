import image from '../assets/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg'

export function getCardImg(polyline: string) {
    if (polyline) {
        return  <img className="rounded-t-lg h-48 w-96" src={`http://maps.googleapis.com/maps/api/staticmap?path=enc:${polyline}&size=600x400&zoom=13&format=jpg&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}></img>
    }

    return <img className="rounded-t-lg h-48 w-96" src={image} ></img>
}