import { createFileRoute } from '@tanstack/react-router'
import { appConfig } from '../app.config'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <title>{appConfig.clientName}</title>

      <div className="text-center">
        <main className="min-h-[calc(100vh-76px)] flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
          test
        </main>
      </div>
    </>
  )
}
