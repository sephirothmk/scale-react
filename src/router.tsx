import {Route, Routes} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";
import MainLayout from "@/routes/layouts/main-layout.tsx";
import HomePage from "@/pages/home-page.tsx";

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
                path={appRoutes.artist}
                element={
                    <MainLayout>
                        <div>Artist Page</div>
                    </MainLayout>
                }
            />
        </Routes>
    )
}

export default AppRouter
