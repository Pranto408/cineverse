function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center">
        <span className="text-xl font-bold text-red-500">CineVerse</span>
        <p className="text-gray-400 text-sm">© 2026 CineVerse. All rights reserved.</p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default Footer
