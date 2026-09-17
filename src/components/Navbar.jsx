import { Link } from 'react-router-dom'
import { Clapperboard } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-red-500"
        >
          <Clapperboard size={26} />
          CineVerse
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
          <Link
            to="/movies"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md font-medium"
          >
            Browse Movies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
