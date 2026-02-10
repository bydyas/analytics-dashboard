class AppConfig {
    clientName = import.meta.env.VITE_CLIENT_NAME || 'frontend-service'
    isDev = import.meta.env.DEV
    githubRepo = import.meta.env.VITE_REPO
    baseApi = import.meta.env.VITE_API
}

export const appConfig = new AppConfig()