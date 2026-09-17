import { Star } from 'lucide-react'

function MovieCard({ movie, onSelect }) {
  const posterImage = movie.image ? movie.image.medium : null
  const year = movie.premiered ? movie.premiered.slice(0, 4) : 'N/A'
  const rating = movie.rating && movie.rating.average ? movie.rating.average : 'N/A'

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 flex flex-col">
      {posterImage ? (
        <img src={posterImage} alt={movie.name} className="w-full h-72 object-cover" />
      ) : (
        <div className="w-full h-72 bg-gray-800 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-lg line-clamp-1">{movie.name}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{year}</span>
          <span className="flex items-center gap-1 text-yellow-400">
            <Star size={14} fill="currentColor" />
            {rating}
          </span>
        </div>
        <button
          onClick={() => onSelect(movie)}
          className="mt-auto bg-red-600 hover:bg-red-700 py-2 rounded-md font-medium"
        >
          See Details
        </button>
      </div>
    </div>
  )
}

export default MovieCard
