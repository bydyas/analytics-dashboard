[![Analytics Dashboard CI](https://github.com/bydyas/analytics-dashboard/actions/workflows/analytics-dashboard.yml/badge.svg)](https://github.com/bydyas/analytics-dashboard/actions/workflows/analytics-dashboard.yml)

# The Analytics Dashboard

- [Structure](#structure)
- [Set up](#set-up)

### Structure

```shell
.
├── apps
│   ├── dashboard-bff-service       # Backend-for-Frontend service                
│   └── dashboard-frontend-service  # Frontend UI service                      
└── packages
    |── @common/health              # Health check
    |── @common/logger              # Logs to save into file.txt
    |── @common/cache               # Cache
    |── @common/contracts           # Types
    ├── @common/eslint-config       # `eslint` configurations (includes `prettier`)
    ├── @common/jest-config         # `jest` configurations
    ├── @common/typescript-config   # `tsconfig.json`s used throughout the monorepo
```

### Set up

via __Docker__:
```shell
docker-compose up
```

via __package manager__:
```
yarn install & yarn dev
```