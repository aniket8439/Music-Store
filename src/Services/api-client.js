import axios from 'axios';
export async function getSongs(trackName) {
    const URL = `https://itunes.apple.com/search?term=${trackName}&limit=25&country=in`;
    const response = await axios.get(URL);
    console.log(response.data['results']);
    return response.data['results'];
}