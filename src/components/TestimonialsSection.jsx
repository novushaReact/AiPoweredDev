import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
  Pause,
  Quote,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/api/placeholder/100/100",
      videoUrl: "/testimonial-sarah.mp4",
      quote:
        "Delivered 4 months ahead of schedule – their AI tools predicted bottlenecks we couldn't see coming.",
      results: "+200% scalability improvement",
      rating: 5,
      logo: "/api/placeholder/120/40",
    },
    {
      name: "Michael Chen",
      position: "Founder, E-commerce Plus",
      company: "E-commerce Plus",
      image: "/api/placeholder/100/100",
      videoUrl: "/testimonial-michael.mp4",
      quote:
        "The AI-powered recommendation system increased our revenue by 85% in the first quarter alone.",
      results: "+85% revenue increase",
      rating: 5,
      logo: "/api/placeholder/120/40",
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Engineering, MedTech Solutions",
      company: "MedTech Solutions",
      image: "/api/placeholder/100/100",
      videoUrl: "/testimonial-emily.mp4",
      quote:
        "Their DevOps automation reduced our deployment time from 6 hours to 15 minutes. Game-changing!",
      results: "95% deployment time reduction",
      rating: 5,
      logo: "/api/placeholder/120/40",
    },
    {
      name: "James Wilson",
      position: "VP of Technology, FinanceFlow",
      company: "FinanceFlow",
      image: "/api/placeholder/100/100",
      videoUrl: "/testimonial-james.mp4",
      quote:
        "Security was our top concern. They delivered a robust solution that exceeded all compliance requirements.",
      results: "100% compliance achieved",
      rating: 5,
      logo: "/api/placeholder/120/40",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client{" "}
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the leaders who've
            transformed their businesses with our AI-powered solutions.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          className="max-w-6xl mx-auto"
          key={currentTestimonial}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Video/Image Section */}
              <div className="relative bg-slate-800 flex items-center justify-center min-h-[400px]">
                {/* Video Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-slate-700 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-slate-600 rounded-full flex items-center justify-center">
                      <Play className="text-gold ml-1" size={32} />
                    </div>
                  </div>

                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-gold/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="text-gold" size={48} />
                    </div>
                  </div>
                </div>

                {/* Client Logo */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                    {currentData.company}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {/* Quote Icon */}
                <Quote className="text-gold mb-6" size={48} />

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl font-medium mb-8 leading-relaxed">
                  "{currentData.quote}"
                </blockquote>

                {/* Results Badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-semibold text-sm">
                      {currentData.results}
                    </span>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center text-lg font-bold">
                      {currentData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      {currentData.name}
                    </h4>
                    <p className="text-gray-400">{currentData.position}</p>
                    <p className="text-gray-500 text-sm">
                      {currentData.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-gold fill-current"
                      size={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:border-slate-500 hover:bg-slate-700 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-gold scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:border-slate-500 hover:bg-slate-700 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-slate-800 border border-slate-600 rounded-full hover:border-slate-500 hover:bg-slate-700 transition-all ml-4"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        </div>

        {/* Stats Summary */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">500+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.8%</div>
            <p className="text-gray-300">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$10M+</div>
            <p className="text-gray-300">Client Savings Generated</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
