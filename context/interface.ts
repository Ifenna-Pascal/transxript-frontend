/* eslint-disable no-unused-vars */
import { LoginProps } from '../services/interface';

export interface reducerProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile?: any;
  selected_course: any;
  course_details?: any;
  students?: any;
  result?: any;
  savedResults?: any;
  studentResults?: any;
}

export interface contextProps {
  state: reducerProps;
  userLogin: (data: LoginProps) => void;
  getUserProfile: () => void;
  selectedCourse: (detail: any) => void;
  getCourse: (id: string) => void;
  allStudents: () => void;
  addResult: (result: object) => void;
  setResult: (result: any) => void;
  saveResult: (result: any) => void;
  loginStudent: (data: string) => void;
  studentsResults: (data: string) => void;
}
