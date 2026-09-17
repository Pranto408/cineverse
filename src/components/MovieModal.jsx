import { X, Star } from 'lucide-react'

function MovieModal({ movie, onClose }) {
  const backdropImage = movie.image ? movie.image.original : null
  const rating = movie.rating && movie.rating.average ? movie.rating.average : 'N/A'
  const summaryText = movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No summary available.'
  const genres = movie.genres && movie.genres.length > 0 ? movie.genres.join(', ') : 'N/A'
  const network = movie.network ? movie.network.name : 'N/A'

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 rounded-full p-2"
        >
          <X size={20} />
        </button>

        {backdropImage && (
          <img src={backdropImage} alt={movie.name} className="w-full h-80 object-cover" />
        )}

        <div className="p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{movie.name}</h2>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1 text-yellow-400">
              <Star size={16} fill="currentColor" />
              {rating}
            </span>
            <span>{movie.premiered || 'N/A'}</span>
          </div>

          <p className="text-gray-300">{summaryText}</p>

          <div className="text-sm text-gray-400 flex flex-col gap-1">
            <span>Genre: {genres}</span>
            <span>Network: {network}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
