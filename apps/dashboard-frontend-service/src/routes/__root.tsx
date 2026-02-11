import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { LayoutTheme } from '@common/contracts'

import { ThemeProvider } from '@/providers/theme-provider'
import { appConfig } from '@/app.config'

import Header from '@/components/header'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme={LayoutTheme.DARK} storageKey="vite-ui-theme">
      <Header />
      <Outlet />
      {appConfig.isDev && (
        <TanStackDevtools
          config={{
            position: 'bottom-left'
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
              defaultOpen: false
            },
            {
              name: 'Tanstack Query',
              render: <ReactQueryDevtoolsPanel />,
              defaultOpen: false
            },
          ]}
        />
      )}
    </ThemeProvider>
  ),
})
