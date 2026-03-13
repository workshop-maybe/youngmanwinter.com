import Image from "next/image";
import { upcoming } from "../data/shows";
import { FaInstagram, FaFacebook, FaSpotify, FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const titleWords = ["YOUNG", "MAN", "WINTER"];

  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Ambient glow orbs — stage lighting feel */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
              animation: "drift 20s ease-in-out infinite",
            }}
          />
          <div
            className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
              animation: "drift-slow 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(251,191,36,0.05) 0%, transparent 70%)",
              animation: "drift 18s ease-in-out infinite reverse",
            }}
          />
        </div>

        <div className="relative z-10 py-16 px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col justify-center items-center w-full mx-auto"
          >
            {/* Animated title — each word staggers in */}
            <div className="mb-16 text-center w-full">
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
                {titleWords.map((word, wordIdx) => (
                  <motion.span
                    key={word}
                    className="title-glow text-white text-5xl md:text-7xl lg:text-[12rem] font-bold tracking-tighter leading-none"
                    custom={wordIdx}
                    variants={letterVariants}
                    style={{
                      WebkitTextStroke: wordIdx === 2 ? "1px rgba(251,191,36,0.2)" : "none",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-6 h-[1px] max-w-md"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.4), rgba(59,130,246,0.2), transparent)",
                }}
              />
            </div>

            {/* Video embed */}
            <motion.div variants={fadeInScale} className="w-full max-w-7xl mb-20">
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/5">
                <iframe
                  src="https://www.youtube.com/embed/Zg-SaXRQ5D8"
                  title="Young Man Winter - Official Video"
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </motion.div>

            {/* EP + Social links */}
            <motion.div
              variants={staggerContainer}
              className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl"
              >
                <h2 className="text-yellow-400/90 text-xl font-bold mb-5 text-center uppercase tracking-[0.2em]">
                  Leading Light EP Out Now
                </h2>
                <div className="relative transform transition-transform duration-700 group-hover:scale-[1.03]">
                  <div className="absolute -inset-1 bg-gradient-to-b from-yellow-500/10 via-transparent to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <Image
                    src="/leading-light.png"
                    width={400}
                    height={400}
                    alt="Leading Light EP"
                    className="relative rounded-xl shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="flex flex-col justify-center items-center"
              >
                <div className="grid grid-cols-2 gap-10">
                  <a
                    href="https://www.instagram.com/youngmanwintermusic/"
                    className="social-icon text-white/80 hover:text-yellow-400"
                  >
                    <FaInstagram size={48} />
                  </a>
                  <a
                    href="https://www.facebook.com/youngmanwintermusic/"
                    className="social-icon text-white/80 hover:text-blue-400"
                  >
                    <FaFacebook size={48} />
                  </a>
                  <a
                    href="https://open.spotify.com/artist/6dqCZSKncvq0S7tkAXMd0p"
                    className="social-icon text-white/80 hover:text-green-400"
                  >
                    <FaSpotify size={48} />
                  </a>
                  <a
                    href="https://music.apple.com/us/album/young-man-winter/1635071973"
                    className="social-icon text-white/80 hover:text-white"
                  >
                    <FaApple size={48} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Upcoming Shows */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="container max-w-5xl mx-auto p-10 rounded-2xl my-16 relative"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(251,191,36,0.06) 50%, rgba(0,0,0,0.4) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 0 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h2 className="section-heading text-5xl text-center font-bold pb-10 text-white mx-auto block w-fit">
              Upcoming Shows
            </h2>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {upcoming.map((show: any, i) => (
                <React.Fragment key={i}>
                  {show.link ? (
                    <a href={show.link}>
                      <motion.div
                        variants={fadeIn}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="show-card bg-black/60 backdrop-blur-sm text-white rounded-xl p-6 text-center hover:bg-white/5 transition-all duration-500 cursor-pointer"
                      >
                        <p className="text-xl py-1 font-bold">{show.venue}</p>
                        <p className="text-base text-white/50">{show.city}</p>
                        <p className="text-lg font-bold text-yellow-400 my-3">
                          {show.date}
                        </p>
                        <p className="text-yellow-400/70 py-1 mt-2 text-xs uppercase tracking-[0.25em] font-bold">
                          Get Tickets
                        </p>
                      </motion.div>
                    </a>
                  ) : (
                    <motion.div
                      variants={fadeIn}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="show-card bg-black/60 backdrop-blur-sm text-white rounded-xl p-6 text-center transition-all duration-500"
                    >
                      <p className="text-xl py-1 font-bold">{show.venue}</p>
                      <p className="text-base text-white/50">{show.city}</p>
                      <p className="text-lg font-bold text-yellow-400 my-3">
                        {show.date}
                      </p>
                      {show.featuring && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="text-white/60 text-xs uppercase tracking-[0.25em] mb-2">
                            With
                          </p>
                          {show.featuring.map((sf: string, j: number) => (
                            <p className="text-yellow-400/80 text-lg" key={j}>
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
                variants={fadeIn}
                whileHover={{ scale: 1.01 }}
                className="md:col-span-2 bg-black/40 text-white font-bold text-center text-lg w-full p-6 rounded-xl border border-white/5"
              >
                For details on all shows,{" "}
                <a
                  href="https://www.instagram.com/youngmanwintermusic/"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 underline decoration-dotted underline-offset-4"
                >
                  follow @youngmanwintermusic on Instagram
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Debut Album */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="container max-w-5xl mx-auto p-10 rounded-2xl my-16 relative"
            style={{
              background: "linear-gradient(160deg, rgba(0,0,0,0.6) 0%, rgba(55,65,81,0.15) 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 0 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <h2 className="section-heading text-5xl text-center font-bold pb-10 text-white mx-auto block w-fit">
              Debut Album Out Now
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-2xl border border-white/5"
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
                className="rounded-xl overflow-hidden shadow-2xl border border-white/5"
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

          {/* Footer */}
          <footer className="py-12 border-t border-white/5">
            <div className="container mx-auto text-center">
              <p className="text-white/30 text-sm tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Young Man Winter
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
