import Image from "next/image";
import { upcoming } from "../data/shows";
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-black bg-opacity-95 bg-center bg-no-repeat bg-fixed py-16 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center items-center w-full mx-auto"
        >
          <motion.h1
            variants={fadeIn}
            className="text-white text-5xl md:text-7xl lg:text-[12rem] font-bold tracking-tighter mb-12 text-center w-full"
          >
            YOUNG MAN WINTER
          </motion.h1>

          <motion.div variants={fadeIn} className="w-full max-w-7xl mb-16">
            <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.youtube.com/embed/Zg-SaXRQ5D8"
                title="Young Man Winter - Official Video"
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <h2 className="text-yellow-400 text-2xl font-bold mb-4 text-center">
                Leading Light EP Out Now!
              </h2>
              <div className="transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/leading-light.png"
                  width={400}
                  height={400}
                  alt="new ep"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col justify-center items-center"
            >
              <div className="grid grid-cols-2 gap-8">
                <a
                  href="https://www.instagram.com/youngmanwintermusic/"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaInstagram size={50} />
                </a>
                <a
                  href="https://www.facebook.com/youngmanwintermusic/"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <FaFacebook size={50} />
                </a>
                <a
                  href="https://open.spotify.com/artist/6dqCZSKncvq0S7tkAXMd0p"
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  <FaSpotify size={50} />
                </a>
                <a
                  href="https://music.apple.com/us/album/young-man-winter/1635071973"
                  className="text-white hover:text-gray-400 transition-colors duration-300"
                >
                  <FaApple size={50} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          {/* <p className="lg:pr-10 pb-24 text-right text-2xl text-white">
            Photo by <a href="https://www.instagram.com/artrocity/">@artrocity</a>
          </p> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="container max-w-5xl mx-auto bg-gradient-to-tr from-blue-600/30 to-yellow-600/30 backdrop-blur-sm p-10 rounded-2xl my-16 shadow-2xl border border-white/10"
        >
          <h2 className="text-5xl text-center font-bold pb-8 text-white">
            Upcoming Shows
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((show: any, i) => (
              <React.Fragment key={i}>
                {show.link ? (
                  <>
                    <a href={show.link}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="bg-black/80 backdrop-blur-sm text-white border border-white/10 rounded-xl p-4 text-center hover:bg-neutral-800/80 transition-all duration-300 shadow-lg"
                      >
                        <p className="text-xl py-2 font-bold">{show.venue}</p>
                        <p className="text-lg text-gray-300">{show.city}</p>
                        <p className="text-lg font-bold text-yellow-400 my-2">
                          {show.date}
                        </p>
                        <p className="text-white/80 py-2 mt-2 text-sm uppercase tracking-wider">
                          Get Tickets
                        </p>
                      </motion.div>
                    </a>
                  </>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-black/80 backdrop-blur-sm text-white border border-white/10 rounded-xl p-4 text-center transition-all duration-300 shadow-lg"
                  >
                    <p className="text-xl py-2 font-bold">{show.venue}</p>
                    <p className="text-lg text-gray-300">{show.city}</p>
                    <p className="text-lg font-bold text-yellow-400 my-2">
                      {show.date}
                    </p>
                    {show.featuring && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-white/90 text-sm uppercase tracking-wider mb-2">
                          With:
                        </p>
                        {show.featuring.map((sf: string, i: number) => (
                          <p className="text-yellow-400/90 text-lg" key={i}>
                            {sf}
                          </p>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm text-white font-bold text-center text-xl w-full p-6 rounded-xl border border-white/10 shadow-lg"
            >
              For Details on all shows,{" "}
              <a
                href="https://www.instagram.com/youngmanwintermusic/"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline decoration-dotted underline-offset-4"
              >
                follow @youngmanwintermusic on Instagram
              </a>
              !
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="container max-w-5xl mx-auto bg-gradient-to-br from-black/80 to-gray-700/30 backdrop-blur-sm p-10 rounded-2xl my-16 shadow-2xl border border-white/10"
        >
          <h2 className="text-5xl text-center font-bold pb-8 text-white">
            Debut Album Out Now
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                src="https://open.spotify.com/embed/album/6dqCZSKncvq0S7tkAXMd0p?utm_source=generator&theme=0"
                width="100%"
                height="400"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
                style={{ border: 0 }}
              ></iframe>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                width="100%"
                height="400"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/us/album/young-man-winter/1635071973"
                className="rounded-xl"
                style={{ border: 0 }}
              ></iframe>
            </motion.div>
          </div>
        </motion.div>

        <footer className="bg-black py-8 border-t border-white/10">
          <div className="container mx-auto text-center text-white/60 text-sm">
            <p>
              © {new Date().getFullYear()} Young Man Winter. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
