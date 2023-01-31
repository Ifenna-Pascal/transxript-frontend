/* eslint-disable no-unused-vars */
import React, {createContext, useReducer, useContext} from 'react'
import { reducerProps, contextProps } from './interface';
import AuthReducer from '../reducer/authReducer';
import { LoginProps } from '../services/interface';
import { allResults, courseDetails, getResults, login, saveResults, selectCourse, studentLogin, userProfile, userStudents } from '../services/auth';
import { useRouter } from 'next/router';

const initialState:reducerProps = {
    isLoggedIn: false,
    isLoading: false,
    profile: null,
    selected_course: null,
    course_details: null,
    students: null,
    result:[],
    savedResults: null,
    studentResults: [],
    allResults: null
}

export const AuthContext = createContext<contextProps | null>(null);


function AuthContextProvider({children}: {children: React.ReactNode}) {
  const router = useRouter();
  const redirect = (userType:string) => {
    router.push(userType === "admin" ? "/admin" : "/adviser_dashboard")
  }
  const studentRedirect = () => {
    router.push("/student_dashboard");
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
    console.log(results, "logggg")
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

  const loginStudent = async (regNumber: string) => {
    studentLogin(regNumber, dispatch, studentRedirect)
  }
  
  const studentsResults = async (id:string):Promise<any> => {
    dispatch({
      type: "SET_LOADING",
      payload: undefined
    })
    const data = await getResults(id);
    
    dispatch({
      type: 'STUDENT_RESULTS',
      payload: data?.data?.result
    })
  }  

  const allResult = async (datas:object): Promise<any>=> {
    dispatch({
      type: 'SET_LOADING',
      payload: undefined
    })
    const data = await allResults(datas);
    dispatch({
      type: 'ALL_RESULTS',
      payload: data?.data?.results
    })
  }

  return (
    <AuthContext.Provider value={{state, userLogin, getUserProfile, selectedCourse, getCourse, allStudents, allResult, addResult, setResult, saveResult, loginStudent, studentsResults}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useContextHook = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider;