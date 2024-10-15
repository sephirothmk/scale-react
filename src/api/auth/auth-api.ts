import axios from 'axios';
import {SignupData} from "@/api/auth/mutations/use-signup.tsx";

export const signupForm = async (data: SignupData): Promise<void> => {
    await axios.post(`/auth/signup`, data)
}
