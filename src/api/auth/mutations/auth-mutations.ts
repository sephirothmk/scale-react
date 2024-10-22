import {useMutation} from "@tanstack/react-query";
import {SignupData} from "@/api/auth/mutations/use-signup.tsx";
import {signupForm} from "@/api/auth/auth-api.ts";

export function useSignupMutation() {
    // const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: SignupData) => {
            return signupForm(data)
        },
        onError: error => {
            console.log(error.message)
        },
        onSuccess: async () => {
            console.log('Successfully signed up')

            // await queryClient.invalidateQueries({ queryKey: [`artist`, { id: formData.artist_id }] })
            // await queryClient.invalidateQueries({ queryKey: [`artists`] })
        }
    })
}
