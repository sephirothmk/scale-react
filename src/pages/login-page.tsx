import {Navigate} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";

const LoginPage = () => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated == "YES") {
        return <Navigate to={appRoutes.home} />
    }


    return(
        <div>Login Page</div>
    )
}

export default LoginPage
