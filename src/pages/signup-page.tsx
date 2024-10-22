import {Navigate} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignupData, signupSchema} from "@/api/auth/mutations/use-signup.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useSignupMutation} from "@/api/auth/mutations/auth-mutations.ts";

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

    // const { signupLoading, signupError, executeSignup} = useSignup()

    const { mutate, error, isPending,  } = useSignupMutation()

    const authenticated = localStorage.getItem("authenticated");
    if (authenticated == "YES") {
        return <Navigate to={appRoutes.home} />
    }

    const signup = async (values: SignupData) => {
        console.log("Form has been submitted", values)
        mutate(values)
    }

    return(
        <Card className="w-fit flex flex-col justify-center items-center p-4">
            <span>Signup Page</span>
            <Form {...signupForm}>
                <form className="flex flex-col gap-4" onSubmit={signupForm.handleSubmit(signup)}>
                    <FormField
                        control={signupForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="min-w-32">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Name"
                                        type="name"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        disabled={signupForm.formState.isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={signupForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="min-w-32">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="name@example.com"
                                        type="email"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        disabled={signupForm.formState.isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={signupForm.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="min-w-32">Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="enter your password"
                                        type="password"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        disabled={signupForm.formState.isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={signupForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="min-w-32">Confirm Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="confirm your password"
                                        type="password"
                                        autoCapitalize="none"
                                        autoCorrect="off"
                                        disabled={signupForm.formState.isLoading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="w-fit p-4 border-2 border-black" type="submit" disabled={isPending}>Sign Up</Button>

                    {isPending && <span>Loading....</span>}
                    {error && <span>{error.message}</span>}
                </form>
            </Form>
        </Card>
    )
}

export default SignupPage
