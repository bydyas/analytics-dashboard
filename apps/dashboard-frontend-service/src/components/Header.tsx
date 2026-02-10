import { Link } from '@tanstack/react-router'
import { Box, Github } from 'lucide-react'
import { appConfig } from '@/app.config'

export default function Header() {
  return (
    <>
      <header className="p-6 flex items-center bg-gray-800 text-white shadow-lg justify-between">
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/" className='flex items-center gap-2'>
            <Box />
            {appConfig.clientName}
          </Link>
        </h1>
        <nav>
          <a href={appConfig.githubRepo} target='blank'>
            <Github size={20} />
          </a>
        </nav>
      </header>
    </>
  )
}
