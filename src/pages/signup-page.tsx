import {Navigate} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
})

const SignupPage = () => {
    const signupForm = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const authenticated = localStorage.getItem("authenticated");
    if (authenticated == "YES") {
        return <Navigate to={appRoutes.home} />
    }

    const signup = (values: z.infer<typeof signupSchema>) => {
        console.log("Form has been submitted", values)
    }

    return(
        <div className="flex flex-col justify-center items-center p-4">
            <span>Signup Page</span>
            <form className="flex flex-col gap-4" onSubmit={signupForm.handleSubmit(signup)}>
                <input className="border-2 border-black w-fit" placeholder="Name" {...signupForm.register("name")} type="text"/>
                {signupForm.formState.errors.name && <span>{signupForm.formState.errors.name.message}</span>}

                <input className="border-2 border-black w-fit" placeholder="Email" {...signupForm.register("email")} type="email"/>
                {signupForm.formState.errors.email && <span>{signupForm.formState.errors.email.message}</span>}

                <input className="border-2 border-black w-fit" placeholder="Password" {...signupForm.register("password")} type="password"/>
                {signupForm.formState.errors.password && <span>{signupForm.formState.errors.password.message}</span>}

                <input className="border-2 border-black w-fit" placeholder="Confirm Password" {...signupForm.register("confirmPassword")} type="password"/>
                {signupForm.formState.errors.confirmPassword && <span>{signupForm.formState.errors.confirmPassword.message}</span>}

                <button className="w-fit p-4 border-2 border-black" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupPage
