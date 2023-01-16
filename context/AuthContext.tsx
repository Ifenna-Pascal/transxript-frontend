import React, {createContext, useReducer, useContext} from 'react'
import { reducerProps, contextProps } from './interface';
import AuthReducer from '../reducer/authReducer';
import { LoginProps } from '../services/interface';
import { login, selectCourse, userProfile } from '../services/auth';
import { useRouter } from 'next/router';

const initialState:reducerProps = {
    isLoggedIn: false,
    isLoading: false,
    profile: null,
    selected_course: null,
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

  const selectedCourse = async (detail:any) => {
    console.log(detail, "deee")
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

  return (
    <AuthContext.Provider value={{state, userLogin, getUserProfile, selectedCourse}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useContextHook = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider;