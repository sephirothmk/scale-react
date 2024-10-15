import {useState} from "react";
import {z} from "zod";
import {signupForm} from "@/api/auth/auth-api.ts";
import {delay} from "@/lib/utilities.ts";

export const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})

export type SignupData = z.infer<typeof signupSchema>

export function useSignup() {
    const [ signupError, setSignupError ] = useState<Error>()
    const [ signupLoading, setSignupLoading ] = useState<boolean>(false)
    
    async function executeSignup(data: SignupData) {
        setSignupLoading(true);

        try {
            await delay(3000)
            await signupForm(data)

        } catch (err: unknown) {
            if (err instanceof Error) {
                setSignupError(err);
            }
        } finally {
            setSignupLoading(false);
        }
    }
    
    return { signupError, signupLoading, executeSignup }
}
