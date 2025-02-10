import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add this near the top of your component where other state is defined
  const imagess = [
    {
      main: '/images/camp.jpg',
      thumbnail: '/images/camp.jpg',
      caption: 'Scout Camp Adventures'
    },
    {
      main: '/images/im1.jpg',
      thumbnail: '/images/im1.jpg',
      caption: 'Leadership Training'
    },
    {
      main: '/images/im2.jpg',
      thumbnail: '/images/im2.jpg',
      caption: 'Community Service'
    },
    {
      main: '/images/im3.jpg',
      thumbnail: '/images/im3.jpg',
      caption: 'Team Building'
    },
    {
      main: '/images/ph1.jpg',
      thumbnail: '/images/ph1.jpg',
      caption: 'Outdoor Activities'
    },
    {
      main: '/images/photo.jpg',
      thumbnail: '/images/photo.jpg',
      caption: 'Scout Ceremonies'
    },
    {
      main: '/images/pl1.jpg',
      thumbnail: '/images/pl1.jpg',
      caption: 'Scout Skills'
    },
    {
      main: '/images/service.jpg',
      thumbnail: '/images/service.jpg',
      caption: 'Community Service'
    },
    {
      main: '/images/workshop.jpg',
      thumbnail: '/images/workshop.jpg',
      caption: 'Scout Workshops'
    }
  ];
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

  const images = [
    {
      main: '/images/gallery/main1.jpg',
      thumbnail: '/images/gallery/thumb1.jpg',
      caption: 'Summer Camp Adventures'
    },
    {
      main: '/images/gallery/main2.jpg',
      thumbnail: '/images/gallery/thumb2.jpg',
      caption: 'Leadership Training'
    },
    {
      main: '/images/gallery/main3.jpg',
      thumbnail: '/images/gallery/thumb3.jpg',
      caption: 'Community Service'
    },
    {
      main: '/images/gallery/main4.jpg',
      thumbnail: '/images/gallery/thumb4.jpg',
      caption: 'Nature Exploration'
    },
    {
      main: '/images/gallery/main5.jpg',
      thumbnail: '/images/gallery/thumb5.jpg',
      caption: 'Team Building Activities'
    },
    {
      main: '/images/gallery/main6.jpg',
      thumbnail: '/images/gallery/thumb6.jpg',
      caption: 'Scout Ceremonies'
    },
    {
      main: '/images/gallery/main7.jpg',
      thumbnail: '/images/gallery/thumb7.jpg',
      caption: 'Outdoor Skills'
    },
    {
      main: '/images/gallery/main8.jpg',
      thumbnail: '/images/gallery/thumb8.jpg',
      caption: 'International Jamboree'
    },
    {
      main: '/images/gallery/main9.jpg',
      thumbnail: '/images/gallery/thumb9.jpg',
      caption: 'Scout Traditions'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      {/* First Page */}
      <div className="h-screen relative">
        {/* Background Image */}
        <div
          className=" inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/ph1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />

        {/* Content */}
        <div className=" z-10 h-full flex flex-col items-center justify-center text-center">
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

        {/* Just a small peek of the red card */}
        <div className="absolute -bottom-6 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-red-600 rounded-t-[2rem] h-24" />
          </div>
        </div>
      </div>

      {/* Second Page */}
      <div className="min-h-screen bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Full Stats Card */}
          <div className="-mt-6">
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

          {/* Les Scouts Tunisiens Section */}
          <div className="mt-24 pb-24">
            <div className="relative">
              {/* Background world map - we'll use a semi-transparent image */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/images/world-map.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-5xl font-bold text-red-600 text-center mb-16">
                  Les Scouts Tunisiens
                </h2>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <p className="text-xl text-gray-800 leading-relaxed text-center">
                      L'organisation des SCOUTS TUNISIENS est une organisation de jeunesse.
                    </p>
                    <p className="text-xl text-gray-800 leading-relaxed text-center">
                      Elle a pour but de contribuer au développement des jeunes en les aidant à réaliser pleinement leurs possibilités physiques, intellectuelles, affectives, sociales et spirituelles, en tant qu'individu et futur citoyen responsable selon la méthode scout.
                    </p>
                    <div className="text-center">
                      <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
                        Lire Plus
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/pl1.jpg"
                      alt="Scout"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* A Propos du Scout Section */}
          <div className="mt-24 pb-24">
            <h2 className="text-5xl font-bold text-orange-500 text-center mb-8">
              A PROPOS DU SCOUT
            </h2>
            <p className="text-xl text-gray-800 text-center max-w-5xl mx-auto mb-16">
              Expérience exceptionnelle avec le Scoutisme . Nos programmes focalisés sur le développement de la personnalité, le leadership et les activités en pleine nature, procurent des bénéfices qui améliore toute la vie. Avec notre vision du scoutisme, nos Scouts sont :
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
              {/* Card 1 */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-72">
                  <img
                    src="/images/im1.jpg"
                    alt="Scouts working in team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-800 text-center">
                  Plus adaptés au travail en équipe
                </p>
              </div>

              {/* Card 2 */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-72">
                  <img
                    src="/images/im2.jpg"
                    alt="Scouts being social"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-800 text-center">
                  Plus épanouis dans leur vie sociale
                </p>
              </div>

              {/* Card 3 */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg h-72">
                  <img
                    src="/images/im3.jpg"
                    alt="Scouts in nature"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-gray-800 text-center">
                  Plus engagés dans leur environnement
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-olive-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-olive-900 transition-colors">
                Voir plus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Connecting Section*/}
      <div className="relative bg-gradient-to-b from-white to-black h-16 overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          initial={{ x: "100%", y: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="text-6xl font-bold tracking-wider inline-flex items-center gap-8">
            <span className="text-red-600">DISCOVER OUR LATEST NEWS</span>
            <span className="text-white">•</span>
            <span className="text-red-600">STORIES THAT INSPIRE</span>
            <span className="text-white">•</span>
            <span className="text-red-600">ACHIEVEMENTS THAT MOTIVATE</span>
            <span className="text-white">•</span>
          </span>
        </motion.div>
      </div>

      {/* Third Page - News Section */}
      <div className="min-h-screen bg-black relative py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/*Explore Topics*/}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">EXPLORE TOPICS</h2>
            <div className="flex flex-wrap gap-3">
              {['ARTIFICIAL INTELLIGENCE', 'BIOTECHNOLOGY', 'COMPUTING', 'ENERGY', 'FUTURE', 'ROBOTICS', 'SCIENCE', 'SPACE', 'TECH'].map((topic, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="md:col-span-2 lg:col-span-2 group">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/ph1.jpg"
                  alt="Featured Article"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    Scouts Lead Environmental Initiative: Global Impact Through Local Action
                  </h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <span>By Scout Leader</span>
                    <span className="mx-2">•</span>
                    <span>Feb 09, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Articles */}
            {[
              {
                image: '/images/im1.jpg',
                title: 'Youth Leadership Summit: Empowering Tomorrow\'s Leaders',
                author: 'Sarah Connor',
                date: 'Feb 08, 2025'
              },
              {
                image: '/images/im2.jpg',
                title: 'International Scout Jamboree: Uniting Cultures Through Adventure',
                author: 'John Smith',
                date: 'Feb 07, 2025'
              },
              {
                image: '/images/im3.jpg',
                title: 'Community Service: Scouts Making a Difference',
                author: 'Mike Johnson',
                date: 'Feb 06, 2025'
              }
            ].map((article, index) => (
              <div key={index} className="group">
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-gray-300 text-sm">
                      <span>By {article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Stories Button */}
          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center">
              VIEW ALL STORIES
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="relative bg-white min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-red-600 mb-6">
              UPCOMING EVENTS
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Join us in our next exciting scout events and activities
            </p>
          </div>

          {/* Events Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button className="absolute -left-12 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-full text-white shadow-lg hover:bg-red-700 transition-colors z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button className="absolute -right-12 top-1/2 -translate-y-1/2 bg-red-600 p-3 rounded-full text-white shadow-lg hover:bg-red-700 transition-colors z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable Cards Container */}
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-6 pb-8 min-w-max">
                {[
                  {
                    title: "Summer Camp 2024",
                    date: "July 15-30",
                    location: "Mountain Valley",
                    image: "/images/camp.jpg",
                    category: "Adventure"
                  },
                  {
                    title: "Leadership Workshop",
                    date: "June 5",
                    location: "Scout HQ",
                    image: "/images/leadership.jpg",
                    category: "Training"
                  },
                  {
                    title: "Community Service",
                    date: "May 20",
                    location: "City Park",
                    image: "/images/service.jpg",
                    category: "Service"
                  },
                  {
                    title: "Night Hiking",
                    date: "August 10",
                    location: "Forest Trail",
                    image: "/images/hiking.jpg",
                    category: "Adventure"
                  },
                  {
                    title: "First Aid Course",
                    date: "September 1",
                    location: "Training Center",
                    image: "/images/firstaid.jpg",
                    category: "Training"
                  }
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group w-[300px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-red-500 transition-all duration-300">
                      <div className="relative h-48">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                          {event.title}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 mr-2 text-red-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {event.date}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 mr-2 text-red-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-16">
            <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors inline-flex items-center gap-3">
              VIEW ALL EVENTS
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Join Scouts Call-to-Action Section */}
      <div className="relative overflow-hidden">
        {/* Diagonal Sections */}
        <div className="absolute inset-0">
          <div className="h-1/3 bg-red-600" />
          <div className="h-1/3 bg-white transform -skew-y-6" />
          <div className="h-1/3 bg-black transform skew-y-6" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-6xl font-bold leading-tight">
                <span className="text-white">DISCOVER</span> <br />
                <span className="text-black">YOUR PATH</span> <br />
                <span className="text-red-600">IN SCOUTING</span>
              </h2>

              <div className="space-y-6 text-lg">
                <p className="text-gray-800 font-medium">
                  🌟 Build Character • Learn Skills • Make Friends
                </p>
                <p className="text-gray-700 font-medium">
                  Join a global movement of young people making a positive impact.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
                  JOIN NOW
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 shadow-lg">
                  LEARN MORE
                </button>
              </div>
            </motion.div>

            {/* Right Side - Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  icon: "🏕️",
                  title: "Outdoor Adventures",
                  description: "Camping, hiking, and nature exploration"
                },
                {
                  icon: "🤝",
                  title: "Leadership Skills",
                  description: "Building confidence and responsibility"
                },
                {
                  icon: "🌍",
                  title: "Global Community",
                  description: "Connect with scouts worldwide"
                },
                {
                  icon: "⭐",
                  title: "Personal Growth",
                  description: "Achievement through challenges"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-xl hover:transform hover:scale-105 transition-all border border-gray-100 hover:border-red-500"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-red-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Statistics */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "100+",
                label: "Years of Scouting Excellence"
              },
              {
                number: "50M+",
                label: "Scouts Worldwide"
              },
              {
                number: "170+",
                label: "Countries & Territories"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-red-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-red-600 mb-6">
              SCOUT LIFE MOMENTS
            </h2>
            <p className="text-xl text-white/80">
              Discover our adventures through pictures
            </p>
          </div>

          {/* Gallery Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative aspect-[16/9] mb-8">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600">
                <img
                  src={imagess[currentImageIndex].main}
                  alt={imagess[currentImageIndex].caption}
                  className="w-full h-full object-cover"
                />


                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/90 hover:bg-red-700 p-3 rounded-full text-white shadow-lg transition-all"
                  onClick={previousImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/90 hover:bg-red-700 p-3 rounded-full text-white shadow-lg transition-all"
                  onClick={nextImage}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-bold">
                    {imagess[currentImageIndex].caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnails Grid */}
            {/* Thumbnails Grid */}
            <div className="grid grid-cols-3 md:grid-cols-9 gap-2 max-w-3xl mx-auto">
              {imagess.map((image, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden ${currentImageIndex === index
                    ? 'ring-2 ring-red-600 ring-offset-1'
                    : 'hover:ring-1 hover:ring-red-400 hover:ring-offset-1'
                    }`}
                >
                  <img
                    src={image.thumbnail}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-0 w-40 h-40 bg-black/5 rounded-full blur-2xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
}