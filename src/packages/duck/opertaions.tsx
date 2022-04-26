import { apiService } from "../../api-service";

const postData = (payload : any) => {
    console.log(payload);
    return new Promise(async (resolve, reject) => {
      apiService('post', '/form/QS', payload).then(
        res => {
          console.warn(res, 'asdass');
          let responseData = res.data;
          resolve(responseData);
        },
        err => {
          let errorResponse = err.response.data;
          reject(errorResponse);
          console.log(errorResponse);
        },
      );
    });
  };

  const updateData = (schoolPrefix : any,id : any,payload : any) => {
    console.log(payload);
    return new Promise(async (resolve, reject) => {
      apiService('put',  '/form/'+schoolPrefix+'/'+id, payload).then(
        res => {
          console.warn(res, 'asdass');
          let responseData = res.data;
          resolve(responseData);
        },
        err => {
          let errorResponse = err.response.data;
          reject(errorResponse);
          console.log(errorResponse);
        },
      );
    });
  };

  const getSchoolData = (schoolPrefix : any) => {
    return new Promise(async (resolve, reject) => {
      apiService('get', '/form/'+schoolPrefix).then(
        res => {
          console.warn(res, 'asdass');
          let responseData = res.data;
          resolve(responseData);
        },
        err => {
          let errorResponse = err.response.data;
          reject(errorResponse);
          console.log(errorResponse);
        },
      );
    });
  };

  const getStudentData = (schoolPrefix : any,id: any) => {
    return new Promise(async (resolve, reject) => {
      apiService('get', '/form/'+schoolPrefix+'/'+id).then(
        res => {
          console.warn(res, 'asdass');
          let responseData = res.data;
          resolve(responseData);
        },
        err => {
          let errorResponse = err.response.data;
          reject(errorResponse);
          console.log(errorResponse);
        },
      );
    });
  };

  export {
    postData,
    getSchoolData,
    updateData,
    getStudentData
  };