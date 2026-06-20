"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const stories = [
  {
    name: "Arafat Rahman",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1581382575275-97901c2635b7",
    story:
      "Joined StartupForge and found a co-founder in 2 weeks. Now building a SaaS product together.",
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1631947430066-48c30d57b943",
    story:
      "I was looking for real startup experience. StartupForge connected me with 3 active projects.",
  },
  {
    name: "Tanvir Hasan",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604",
    story:
      "Got my first startup internship through StartupForge. Amazing community for builders.",
  },
  {
    name: "Shakil Ahmed",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f",
    story:
      "I posted my idea and quickly built a full team. We are now preparing for launch.",
  },
  {
    name: "Mehedi Hasan",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1629125972679-3ce2e5567116",
    story:
      "StartupForge helped me collaborate on real-world projects and improve my skills fast.",
  },
  {
    name: "Rakibul Islam",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3",
    story:
      "StartupForge helped me join a fintech startup where I built my first production-ready mobile app used by real users.",
  },
  {
    name: "Sadia Karim",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1643183777847-80490823d73d",
    story:
      "I connected with developers and designers here and successfully launched an MVP within 30 days of joining.",
  },
  {
    name: "Farhan Hossain",
    role: "DevOps Engineer",
    image: "https://plus.unsplash.com/premium_photo-1682096592504-5bc960bea6d7",
    story:
      "I collaborated on a startup idea that scaled from concept to cloud deployment using real DevOps workflows.",
  },
];

const SuccessStories = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-slate-950">
      {/* Header */}
      <div className="container mx-auto px-6 text-center pb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white ${spaceGrotesk.className}`}
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-md lg:text-lg text-slate-600 dark:text-white mt-3 ${inter.className}`}
        >
          Real builders. Real startups. Real impact.
        </motion.p>
      </div>

      {/* Marquee */}
      <Marquee pauseOnHover gradient={false} speed={30}>
        <div className="flex gap-6 px-6 mb-5">
          {stories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-[320px] h-55 shrink-0 rounded-2xl 
              bg-white/10 dark:bg-white/5 backdrop-blur-xl 
              border border-slate-200/20 dark:border-white/10 
              p-5 shadow-lg"
            >
              {/* Top section: Avatar + Info */}
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/40 shadow-md"
                />

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role}
                  </span>
                </div>
              </div>

              {/* Story */}
              <p
                className={`text-sm text-slate-700 dark:text-slate-300 leading-relaxed ${inter.className}`}
              >
                “{item.story}”
              </p>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default SuccessStories;
