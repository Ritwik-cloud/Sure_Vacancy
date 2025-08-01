import React, { memo } from "react";
import { ArrowRight, MessageCircle, Globe, Briefcase, Star, Users } from "lucide-react";

const WHATSAPP_INVITE = "https://chat.whatsapp.com/CFAWhEkz0pzLx6m9WSQbSP?mode=ac_c";

const Newsletter = () => {
  const handleClick = () => {
    window.open(WHATSAPP_INVITE, "_blank");
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          
          {/* WhatsApp Group Card */}
          <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
            <div className="h-full bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/20 transition-all duration-300">
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 p-4 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                  <MessageCircle className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Join Our WhatsApp Group
                </h2>
                
                <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                  Connect with our vibrant community for exclusive updates, insights, and networking opportunities.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Users className="h-5 w-5 text-emerald-200" />
                    <span className="text-sm font-medium">Active Community</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Star className="h-5 w-5 text-yellow-300" />
                    <span className="text-sm font-medium">Exclusive Content</span>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="mt-auto px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center group-hover:bg-gray-50"
                >
                  Join WhatsApp Community
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Sure Vacancy Card */}
          <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
            <div className="h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl hover:shadow-3xl hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-300 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl transform translate-x-16 -translate-y-16"></div>
              
              <div className="flex flex-col items-center text-center h-full relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full backdrop-blur-sm group-hover:from-blue-500/40 group-hover:to-purple-600/40 transition-all duration-300">
                  <Globe className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Sure Vacancy
                </h2>
                
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                  </span>
                  Coming Soon
                </div>
                
                <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                  Get ready for our comprehensive overseas placement services. Connect with global opportunities and expand your career horizons.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Briefcase className="h-5 w-5 text-blue-300" />
                    <span className="text-sm font-medium">Global Placements</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Globe className="h-5 w-5 text-purple-300" />
                    <span className="text-sm font-medium">Overseas Opportunities</span>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-sm md:text-base font-medium backdrop-blur-sm border border-white/20">
            <MessageCircle className="h-5 w-5 mr-2" />
            Stay connected with our growing community
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Newsletter);