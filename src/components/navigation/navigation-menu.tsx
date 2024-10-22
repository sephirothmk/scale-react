import {navRoutes} from "@/routes/app-routes.tsx";
import NavItem from "@/components/navigation/nav-item.tsx";
import {useTheme} from "@/providers/theme-provider.tsx";
import {Button} from "@/components/ui/button.tsx";

const NavigationMenu = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div className="p-2 bg-primary flex items-center justify-center">
            <ul className="text-nav flex gap-10">
                {navRoutes.map((route, index) => {
                    return <NavItem key={index} route={route} />;
                })}
            </ul>

            <Button onClick={()=> {
                if (theme === "light") {
                    setTheme("dark")
                } else {
                    setTheme("light")
                }
            }}>Change Theme</Button>
        </div>
    )
}

export default NavigationMenu
