import React from 'react';
import { BookOpen, MessageSquare, Users, Sparkles } from 'lucide-react';

const CampusConnectLanding = ({ onJoinClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-950 text-white font-sans overflow-hidden">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
          body { font-family: 'Poppins', sans-serif; }
          .glow-text {
            text-shadow: 0 0 8px rgba(129, 140, 248, 0.6), 0 0 16px rgba(139, 92, 246, 0.4);
          }
          .card-bg {
            background: rgba(30, 41, 59, 0.6); /* Slate 800 with transparency */
            backdrop-filter: blur(10px);
            border: 1px solid rgba(71, 85, 105, 0.5); /* Slate 700 with transparency */
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[calc(100vh-80px)] text-center py-20 px-4 md:px-8">
        {/* Background Gradients/Shapes */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000 opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000 opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight glow-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
            CampusConnect
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Your vibrant digital hub to connect, share, and thrive with your campus community.
          </p>
          <button
            onClick={onJoinClick}
            className="px-10 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/60 transform hover:scale-105"
          >
            Join the Community
            <Sparkles className="inline-block ml-3 -mt-1" size={24} />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-900/40 border-t border-b border-gray-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-300">
            What Can You Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="card-bg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <BookOpen className="text-cyan-400 mx-auto mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3 text-white">Share & Learn</h3>
              <p className="text-gray-300">
                Post updates, share study notes, write insightful articles, and discover campus news instantly.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="card-bg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <MessageSquare className="text-pink-400 mx-auto mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3 text-white">Real-Time Chat</h3>
              <p className="text-gray-300">
                Connect with classmates, form study groups, and chat in real-time about projects or events.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="card-bg p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Users className="text-lime-400 mx-auto mb-6" size={48} strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold mb-3 text-white">Build Your Network</h3>
              <p className="text-gray-300">
                Like, comment, and save content. Follow peers and expand your professional and social circles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 CampusConnect. All rights reserved.</p>
        <p className="mt-2">Built with passion for campus communities.</p>
      </footer>
    </div>
  );
};
export default CampusConnectLanding;