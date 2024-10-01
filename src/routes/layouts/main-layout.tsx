import NavigationMenu from "@/components/navigation/navigation-menu.tsx";
import {Navigate} from "react-router-dom";
import {appRoutes} from "@/routes/app-routes.tsx";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const authenticated = localStorage.getItem("authenticated");
    if (authenticated !== "YES") {
        return <Navigate to={appRoutes.login} />
    }

    return (
        <div>
            <NavigationMenu />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
