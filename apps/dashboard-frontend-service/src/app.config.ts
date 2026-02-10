class AppConfig {
    clientName = import.meta.env.VITE_CLIENT_NAME || 'frontend-service';
    isDev = import.meta.env.DEV;
    githubRepo = 'https://github.com/bydyas/analytics-dashboard';
}

export const appConfig = new AppConfig();