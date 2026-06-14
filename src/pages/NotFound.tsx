import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cosmic-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="grid-pattern absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* 404 number */}
        <div className="relative mb-6">
          <h1 className="text-[10rem] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 drop-shadow-2xl">
            404
          </h1>
          <div className="absolute inset-0 text-[10rem] font-bold leading-none select-none text-transparent blur-2xl bg-clip-text bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30">
            404
          </div>
        </div>

        <div className="cosmic-card p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Page Not Found
          </h2>
          <p className="text-cosmic-text/70 text-lg leading-relaxed">
            Looks like you've drifted into deep space. The page at{" "}
            <span className="text-purple-400 font-mono text-sm bg-purple-500/10 px-2 py-0.5 rounded">
              {location.pathname}
            </span>{" "}
            doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-purple-500"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-cosmic-text/80 font-semibold rounded-xl border border-cosmic-accent/30 hover:border-cosmic-accent/60 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
