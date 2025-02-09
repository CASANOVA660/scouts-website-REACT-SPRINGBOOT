import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { 
      number: "57 million+", 
      label: "Scouts and volunteers"
    },
    { 
      number: "176", 
      label: "National Scout Organizations"
    },
    { 
      number: "2.7 billion+", 
      label: "Hours of community service"
    },
    { 
      number: "16 million+", 
      label: "Service projects and actions"
    }
  ];

  return (
    <div className="relative">
      {/* First Page */}
      <div className="h-screen relative">
        {/* Background Image */}
        <div 
          className="fixed inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/photo.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center pb-48">
          <div className="w-full max-w-7xl px-4">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-4">
              <span className="text-white">Scouts</span>{" "}
              <span className="text-red-600">always</span>{" "}
              <span className="text-white">come</span>{" "}
              <span className="text-red-600">back.</span>
            </h1>
            <p className="text-white/80 text-sm tracking-widest">
              BE PREPARED • EST. 1907
            </p>
          </div>
        </div>

        {/* Stats Card Preview */}
        <div className="absolute -bottom-16 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-red-600 rounded-t-[2rem] h-48">
              <div className="grid grid-cols-4 divide-x divide-white/10 h-full">
                {stats.map((stat, index) => (
                  <div key={index} className="p-8 text-center">
                    <div className="text-3xl font-bold text-white truncate">
                      {stat.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="min-h-screen bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Full Stats Card */}
          <div className="-mt-16">
            <div className="bg-red-600 rounded-[2rem] shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {stats.map((stat, index) => (
                  <div key={index} className="p-12 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {stat.number}
                    </div>
                    <div className="text-white/90 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-24 text-center pb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Our Global Movement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of a worldwide community dedicated to creating positive change through leadership, service, and adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}