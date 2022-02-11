
const baseURL = 'https://api.nasa.gov/planetary';

const baseurl = process.env.REACT_APP_API_URL;

const ApiKey = '810rtUMCAfNUNADmamPY1sdidWaL6zPRGeoZQ5Dw';


const fetchApi = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}?api_key=${ApiKey}`;

    return (
        fetch(url)
        .then((resp) => resp.json())

        .catch(function (error) {
            console.log(error)
        })
    );

    // if (method === 'GET' ) {

    //     return fetch(url);

    // } else {

    //     return fetch(url, {
    //         method,
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });
    // }

}

const fetchSinToken = (endpoint, data, method = 'GET') => {

    const url = `${baseurl}/${endpoint}`; //localhost:4000/api

    if (method === 'GET' ) {

        return fetch(url);
        
    } else {

        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

}

const fetchConToken = (endpoint, data, method = 'GET') => {

    const url = `${baseurl}/${endpoint}`; //localhost:4000/api

    const token = localStorage.getItem('token') || '';

    if (method === 'GET' ) {

        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
        
    } else { //peticion post 
 
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token 
            },
            body: JSON.stringify(data)
        });
    }

}



export {
    fetchApi,
    fetchConToken,
    fetchSinToken
}