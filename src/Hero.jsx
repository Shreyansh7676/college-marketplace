import React, { useEffect } from 'react';
import { Search, BookOpen, DollarSign, Repeat2, ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import Aurora from './Aurora';
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    <>
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Aurora Background */}
        <div className="absolute inset-0">
          <Aurora
            colorStops={["#10002b", "#5a189a", "#10002b"]}
            blend={0.5}
            amplitude={2.0}
            speed={0.5}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Campus Market<span className="text-violet-800">Place</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Buy and sell used items within your college community. Save money, reduce waste, and connect with fellow students.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button 
                className="bg-violet-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2" 
                onClick={() => navigate('/sell')}
              >
                Start Selling <ArrowRight size={20} />
              </button>
              <button 
                className="bg-black text-violet-800 px-8 py-3 rounded-full font-semibold border-2 border-violet-800 hover:bg-violet-900 hover:text-white transition-colors" 
                onClick={() => navigate('/products')}
              >
                Browse Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    




      {/* Features Section */}
      <div className="py-24 bg-black border-t border-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CampusMarketPlace?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The smartest way to buy and sell within your college community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-xl border border-violet-900 hover:border-violet-700 transition-colors">
              <div className="w-12 h-12 bg-violet-900 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-violet-200" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Easy to Find</h3>
              <p className="text-gray-300">Search and filter items specific to your campus and needs.</p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-violet-900 hover:border-violet-700 transition-colors">
              <div className="w-12 h-12 bg-violet-900 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-violet-200" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Save Money</h3>
              <p className="text-gray-300">Get great deals on textbooks, furniture, electronics, and more.</p>
            </div>

            <div className="bg-black p-8 rounded-xl border border-violet-900 hover:border-violet-700 transition-colors">
              <div className="w-12 h-12 bg-violet-900 rounded-lg flex items-center justify-center mb-4">
                <Repeat2 className="text-violet-200" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Sustainable</h3>
              <p className="text-gray-300">Give items a second life and reduce waste in your community.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-24 border-t bg-black border-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Textbooks', icon: <BookOpen size={24} />, count: '2,534' },
              { name: 'Electronics', icon: <Star size={24} />, count: '1,826' },
              { name: 'Furniture', icon: <ShoppingBag size={24} />, count: '943' },
              { name: 'Accessories', icon: <DollarSign size={24} />, count: '1,252' }
            ].map((category) => (
              <div key={category.name} className="bg-black border border-violet-900 rounded-xl p-6 text-center hover:border-violet-700 transition-transform hover:scale-110 ease-in duration-100">
                <div className="w-12 h-12 bg-violet-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-violet-200">{category.icon}</span>
                </div>
                <h3 className="font-semibold mb-1 text-white">{category.name}</h3>
                <p className="text-sm text-gray-400">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black border-t border-violet-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-violet-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already saving money and making extra cash on CampusMarketPlace.
          </p>
          <button className="bg-black text-violet-800 px-8 py-3 rounded-full font-semibold border-2 border-violet-800 hover:bg-violet-900 hover:text-white hover:scale-105 transition-all " onClick={(e) => navigate('/products')}>
            Create Your Account
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black pt-8 pb-2 border-t border-violet-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2024 CampusMarketPlace. All rights reserved.</p>
          </div>
          <div className='flex space-x-1 justify-center'>
            <p className='text-gray-400 opacity-70'>Made with ❤️ by</p>
            <a className="text-center text-md text-gray-400 opacity-70 no-underline" href='https://github.com/Shreyansh7676'>Shreyansh</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;