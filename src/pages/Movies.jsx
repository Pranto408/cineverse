import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'

function Movies() {
  const [movies, setMovies] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllShows()
  }, [])

  const fetchAllShows = () => {
    setLoading(true)
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const searchShows = (query) => {
    setLoading(true)
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        const shows = data.map((item) => item.show)
        setMovies(shows)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.trim() === '') {
      fetchAllShows()
    } else {
      searchShows(value)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Browse Movies</h1>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a movie title..."
          className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:border-red-500"
        />
      </div>

      {loading ? (
        <p className="text-gray-400 text-center">Loading movies...</p>
      ) : movies.length === 0 ? (
        <p className="text-gray-400 text-center">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelect={setSelectedMovie} />
          ))}
        </div>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}

export default Movies
