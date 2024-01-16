import axios from "axios";
export class ApiClient {
responseStatusCheck(responseObject) {
    if (responseObject.status >= 200 && responseObject.status < 300) {
        return Promise.resolve(responseObject)
    } else {
        return Promise.reject(new Error(responseObject.statusText))
    }
}
   getRequest(url) {
    return axios.get(url).then(this.responseStatusCheck).catch((err) => {
        console.error(err);
    })
   }
   // this gets a random quote
   get_() {
    return this.getRequest("")
   }
   getAuthors(skip, limit) {
    return this.getRequest(`https://quotable.io/authors?skip=${skip}&limit=${limit}`)
   }
   get_() {
    return this.getRequest(`https://quotable.io/quotes?authorId=${authorId}`)
   }
}




const getLink = () => {
     useEffect(() => {
          let userList = JSON.parse(localStorage.getItem('user'));
          let currentUser = JSON.parse(localStorage.getItem("currentUser"))
     
          for(let i in userList){
               if(userList[i].name == currentUser.name && userList[i].password == currentUser.password){
                    imgLink = userList[i].PFP
                    return(imgLink)
               }
          }
     }, [])
}