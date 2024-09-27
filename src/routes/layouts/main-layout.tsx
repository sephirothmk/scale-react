import NavigationMenu from "@/components/navigation/navigation-menu.tsx";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <NavigationMenu />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
