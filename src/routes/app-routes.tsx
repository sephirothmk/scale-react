export type NavRoute = {
    path: string
    title: string
    icon?: string
}

export const appRoutes = {
    home: '/',
    artist: '/artist',
    login: '/login'
}

export const navRoutes: NavRoute[] = [
    {
        path: appRoutes.home,
        title: 'Home'
    },
    {
        path: appRoutes.artist,
        title: 'Artist'
    }
]

