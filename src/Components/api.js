import axios from 'axios';


// function for get Movies datae

async function  getData(){

    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'fast'},
        headers: {
          'X-RapidAPI-Key': '235bbe7c40mshc100adf39dcd554p17cd37jsn4c6a0cf66021',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.d;
      } catch (error) {
          console.error(error);
      }
      
}

export default getData