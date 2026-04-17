import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl text-[#1e3c12] mb-4">404</h1>
        <h2 className="text-3xl mb-4 text-[#1e3c12]">Page Not Found</h2>
        <p className="text-lg text-black/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#1d4a14] text-white px-8 py-3 rounded-lg hover:bg-[#1e3c12] transition-all"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
