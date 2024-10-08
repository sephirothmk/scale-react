import {Route, Routes} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";
import MainLayout from "@/routes/layouts/main-layout.tsx";
import HomePage from "@/pages/home-page.tsx";
import ArtistPage from "@/pages/artist-page.tsx";
import LoginPage from "@/pages/login-page.tsx";
import SignupPage from "@/pages/signup-page.tsx";

const AppRouter = () => {
    return(
        <Routes>
            <Route
                path={appRoutes.home}
                element={
                    <MainLayout>
                        <HomePage />
                    </MainLayout>
                    }
            />
            <Route
                path={`${appRoutes.artist}/:artistId`}
                element={
                    <MainLayout>
                       <ArtistPage />
                    </MainLayout>
                }
            />
            <Route
                path={appRoutes.login}
                element={
                   <LoginPage />
                }
            />
            <Route
                path={appRoutes.signup}
                element={
                    <SignupPage />
                }
            />
        </Routes>
    )
}

export default AppRouter
