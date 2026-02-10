import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

import Header from '../components/Header'
import { appConfig } from '../app.config'

export const Route = createRootRoute({
  component: () => (
    <>
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
    </>
  ),
})
