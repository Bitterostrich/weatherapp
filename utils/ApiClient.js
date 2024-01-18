import axios from "axios";


export default class ApiClient {
responseStatusCheck(responseObject) {
    
    if (responseObject.status >= 200 && responseObject.status < 300) {
        return Promise.resolve(responseObject)
    } else {
        return Promise.reject(new Error(responseObject.statusText))
    }
}
    async getWeather(){
        try {
            const responseObject = await axios.get(`/api/Weather`);
            return this.responseStatusCheck(responseObject);
        } catch (err) {
            console.log(err);
        }
        
    }

  

//    getRequest(url) {
//     return axios.get(url).then(this.responseStatusCheck).catch((err) => {
//         console.error(err);
//     })
//    }
//    // this gets a random quote
//    get_() {
//     return this.getRequest("")
//    }
//    getAuthors(skip, limit) {
//     return this.getRequest(`https://quotable.io/authors?skip=${skip}&limit=${limit}`)
//    }
//    get_() {
//     return this.getRequest(`https://quotable.io/quotes?authorId=${authorId}`)
//    }
}
