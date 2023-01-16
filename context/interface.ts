/* eslint-disable no-unused-vars */
import { LoginProps } from '../services/interface';

export interface reducerProps {
  isLoggedIn: boolean;
  isLoading: boolean;
  profile?: any;
  selected_course: any;
}

export interface contextProps {
  state: reducerProps;
  userLogin: (data: LoginProps) => void;
  getUserProfile: () => void;
  selectedCourse: (detail: any) => void;
}
