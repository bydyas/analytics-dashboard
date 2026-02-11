class AppConfig {
    clientName = import.meta.env.VITE_CLIENT_NAME || 'dashboard-frontend-service'
    isDev = import.meta.env.DEV
    baseApi = import.meta.env.VITE_API || 'http://localhost:3001/api'
}

export const appConfig = new AppConfig()