import { Route } from './types';

export const ROUTES: Record<string, Route> = {
    home: {
        title: 'Home',
        path: '/',
        hasNavItem: true,
        match: new RegExp(/\/programs\/\d+/)
    },
    program: {
        title: 'Program',
        path: '/programs/:programId',
        hasNavItem: false,
    },
    tvShows: {
        title: 'TV Shows',
        path: '/programs/tvShows',
        hasNavItem: true,
    },
    movies: {
        title: 'Movies',
        path: '/programs/movies',
        hasNavItem: true,
    },
    animatedCarousel: {
        title: 'Animated',
        path: '/animatedCarousel',
        hasNavItem: true,
    },
};

export const PATHS = {
    FETCH_PROGRAMS: 'http://localhost:8080/data',
}

export const THEME = {
    palettes: {
        main: '#ffffff',
        mute: '#7a7a7a',
        inverse: '#101010',
        highlight: '#0171f9',
        danger: '#cc3458',
    },
    zIndexes: {
        navBar: 2,
    },
    constants: {
        navBarHeightSmall: '3rem',
        navBarHeightMedium: '7vw'
    },
    media: {
        xs: '480px',
        small: '768px',
        medium: '1024px'
    }
}
