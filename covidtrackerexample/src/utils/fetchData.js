
import axios from 'axios';
import App from '../App';

const fetchData = async (country = 'all') => {
    let url = 'https://disease.sh/v3/covid-19/all';
    if (country !== 'all') {
        url = `https://disease.sh/v3/covid-19/countries/${country}`;
    }

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
export default App