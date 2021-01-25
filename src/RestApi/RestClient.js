import axios from 'axios';
class RestClient{


  // this is a static function.so, we can access this meathod from this class without any object creation.
  static GetRequest(getUrl){
    // return use before axios , because to access .then() directly from where i want
    return axios.get(getUrl).then(response =>{
      return response.data;
    }).catch(error=>{
      return null;
    })
  }


  static PostRequest = (postUrl,postJsonData)=>{

    let config={
      headers:{
      // sercch to knoe headers content type
        'Content-Type': 'application/x-www-form-urlencoded',}
    }

    return axios.post(postUrl,postJsonData,config).then(response =>{
      return response.data;
    }).catch(error=>{
      return null;
    })
  }




}

export default RestClient;