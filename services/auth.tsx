/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { toast } from 'react-toastify';
import transxriptApi from '../hooks/axiosHook';
import { LoginProps } from './interface';

export const login = async (datas: LoginProps, dispatch: any, redirect: any): Promise<any> => {
  dispatch({
    type: 'SET_LOADING',
  });
  try {
    const {data} = await transxriptApi.post('/auth/login', datas);
    localStorage.setItem('user_token', JSON.stringify(data?.data?.token));
    dispatch({
      type: 'USER_LOGIN',
      payload: true
    });
    toast.success('Logged In Successfully');
    redirect()
  } catch (error: any) {
    if(error?.response?.data){
      toast.error(error.response?.data?.message);
      dispatch({
        type: 'ERROR',
      });
    }else {
        toast.error('Network Error');
    }
  }
};


export const userProfile = async (): Promise<any> => {
   try {
     const {data} = await transxriptApi.get('/auth/profile');
    return data
   } catch (error) {
      throw error;
   } 
}

export const selectCourse = async (detail:any): Promise<any> => {  
  try {
    const {data} = await transxriptApi.post('/courses/select_course', detail);
    return data;
  } catch (error) {
      throw error;    
  }
}

export const courseDetails = async (id:string): Promise<any> => {
  try {
    const {data} = await transxriptApi.get(`/courses/${id}`)
    return data;
  } catch (error) {
    throw error; 
  }
}

export const userStudents = async ():Promise<any> =>  {
  try {
    const {data} = await transxriptApi.get('/student/all_student');
    return data;
  } catch (error) {
    throw error; 
  }
}

export const saveResults = async (results: any): Promise<any> => {
  console.log(results, "savvinnnnng")
  try {
    const {data} = await transxriptApi.post('/result/create_result', results);
    toast.success(data?.message);
    return data
  } catch (error) {
    return toast.error("Error creating result")
    // throw error
  }
}