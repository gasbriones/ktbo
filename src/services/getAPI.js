import axios from 'axios';
import config from '../config/config'

export default {
    async getAPIResponse(endpoint, limit, rating, q) {
        try {
            return axios.get(config.giphy.url + endpoint || config.giphy.endpoint , {
                params: {
                    api_key: config.giphy.api_key,
                    limit: limit || config.giphy.limit,
                    rating: rating || config.giphy.rating,
                    q:q || config.giphy.query

                }
            })
        } catch (error) {
            console.error(error)
        }
    }
};
