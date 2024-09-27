import {navRoutes} from "@/routes/app-routes.tsx";
import NavItem from "@/components/navigation/nav-item.tsx";

const NavigationMenu = () => {
    return (
        <div className="p-2 bg-primary flex items-center justify-center">
            <ul className="text-nav flex gap-10">
                {navRoutes.map((route, index) => {
                    return <NavItem key={index} route={route} />;
                })}
            </ul>
        </div>
    )
}

export default NavigationMenu
