import React, {createContext, useReducer, useContext} from 'react'
import { reducerProps, contextProps } from './interface';
import AuthReducer from '../reducer/authReducer';
import { LoginProps } from '../services/interface';
import { courseDetails, login, saveResults, selectCourse, userProfile, userStudents } from '../services/auth';
import { useRouter } from 'next/router';

const initialState:reducerProps = {
    isLoggedIn: false,
    isLoading: false,
    profile: null,
    selected_course: null,
    course_details: null,
    students: null,
    result:[],
    savedResults: null
}

export const AuthContext = createContext<contextProps | null>(null);


function AuthContextProvider({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const redirect = () => {
    router.push("/adviser_dashboard");
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const userLogin = (data: LoginProps ) => {
    login(data, dispatch, redirect) 
  } 
  const getUserProfile = async () => {
    const data = await userProfile();
    dispatch({
      type: 'SET_USER_PROFILE',
      payload: data?.data?.user
     })
  } 

  const allStudents = async () => {
    dispatch({
      type: 'SET_LOADING',
      payload: undefined,
    });
    const data = await userStudents();
    dispatch({
      type: 'ALL_STUDENTS',
      payload: data?.data?.students
    })
  
  }

  const setResult = async (result:any) => {
    dispatch({
      type: 'SET_RESULT',
      payload: result
    })
  }

  const selectedCourse = async (detail:any) => {
    dispatch({
      type: 'SET_LOADING',
      payload: undefined
    })
    const data = await selectCourse(detail)
    dispatch({
      type: 'SELECT_COURSE',
      payload: data?.data?.courses
    })

  }

  const addResult = async (result: object) => {
    dispatch({
      type: 'ADD_RESULT',
      payload: result
    })
  }

  const saveResult = async (results: any) => {
    dispatch({
      type: 'SET_LOADING',
      payload: undefined,
    })
    const data = await saveResults(results)
    dispatch({
      type: 'SAVE_RESULT',
      payload: data?.data?.result
    })
  } 

  const getCourse = async (id: string) => {
    dispatch({
      type: "SET_LOADING",
      payload: undefined
    })
    const data = await courseDetails(id);
    dispatch({
      type: "COURSE_DETAILS",
      payload: data?.data?.course
    })
  }

  return (
    <AuthContext.Provider value={{state, userLogin, getUserProfile, selectedCourse, getCourse, allStudents, addResult, setResult, saveResult}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useContextHook = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider;