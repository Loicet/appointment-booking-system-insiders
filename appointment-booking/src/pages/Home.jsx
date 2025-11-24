import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
void motion;
import { 
  Stethoscope, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Users,
  Video
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 px-6 overflow-hidden">
        {/* Abstract Background Pattern (Dots - No Gradient) */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available in Kigali & Nationwide
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Healthcare <br/>
              <span className="text-teal-700 underline decoration-teal-200 decoration-4 underline-offset-4">Reimagined.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Book appointments, consult via video, and manage your health records. 
              World-class medical care, simplified for Rwanda.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
              <button className="bg-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-800 hover:-translate-y-1 transition-all shadow-xl shadow-teal-900/10 flex items-center justify-center gap-2">
                Book Now <ArrowRight size={20} />
              </button>
              </Link>
              <button className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Video size={20} /> Video Consult
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4 flex items-center gap-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-teal-600" /> No Waiting Time
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-teal-600" /> Verified Doctors
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full h-[400px] lg:h-[500px]">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Doctor smiling" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge 1 - Reviews */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
            >
              <div className="bg-yellow-50 p-2 rounded-lg text-yellow-500">
                <Star fill="currentColor" size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">4.9/5</p>
                <p className="text-xs text-slate-500">Patient Rating</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Doctors */}
            <motion.div 
               initial={{ y: -20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.8 }}
               className="absolute -top-6 -right-6 z-20 bg-teal-700 text-white p-5 rounded-2xl shadow-xl shadow-teal-900/20"
            >
              <Users size={28} className="mb-2" />
              <p className="font-bold text-2xl">150+</p>
              <p className="text-xs text-teal-100">Specialists</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO GRID SERVICES ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Medical Services</h2>
            <p className="text-slate-600">Everything you need to maintain your health, arranged for your convenience.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6"
          >
            {/* Large Card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-teal-200 transition duration-300 group">
              <div className="flex flex-col h-full justify-between">
                <div>
                   <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-700 mb-6 group-hover:scale-110 transition">
                    <Stethoscope size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">General Consultation</h3>
                  <p className="text-slate-600 max-w-md">Our general practitioners provide comprehensive checkups, diagnosis, and treatment plans for common ailments.</p>
                </div>
                <div className="mt-8">
                  <span className="text-teal-700 font-bold group-hover:translate-x-2 transition inline-flex items-center gap-2 cursor-pointer">Learn more <ArrowRight size={18}/></span>
                </div>
              </div>
            </motion.div>

            {/* Tall Card */}
            <motion.div variants={fadeInUp} className="md:row-span-2 bg-teal-900 p-8 rounded-3xl shadow-lg flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">24/7 Urgent Care</h3>
                <p className="text-teal-100/80">Medical emergencies don't wait. Neither do we. Access support anytime.</p>
              </div>
              
              <div className="mt-8 relative z-10">
                <button className="w-full bg-white text-teal-900 py-3 rounded-xl font-bold hover:bg-teal-50 transition">Call Emergency</button>
              </div>
            </motion.div>

            {/* Standard Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-teal-200 transition duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Specialized Surgery</h3>
              <p className="text-slate-600 text-sm">Expert surgeons for complex procedures.</p>
            </motion.div>

            {/* Standard Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-teal-200 transition duration-300 group">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-700 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pediatrics</h3>
              <p className="text-slate-600 text-sm">Gentle care for your little ones.</p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (Timeline) ================= */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">As easy as checking your email.</h2>
              <p className="text-lg text-slate-600 mb-8">We have removed the bureaucracy from healthcare. No endless forms, no confused waiting lines.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Search", desc: "Filter doctors by specialty, location, or insurance." },
                  { title: "Schedule", desc: "Pick a time slot that works for you." },
                  { title: "Consult", desc: "Show up at the clinic or join the video call." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual (Abstract UI) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 relative"
            >
              {/* Fake UI Cards */}
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-4 border-l-4 border-teal-500">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-slate-800">Dr. Sarah M.</div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Confirmed</span>
                </div>
                <div className="text-sm text-slate-500 flex gap-2">
                  <Calendar size={16}/> Mon, 12th Aug
                  <Clock size={16} className="ml-2"/> 10:00 AM
                </div>
              </div>

               <div className="bg-white p-6 rounded-2xl shadow-lg opacity-60 scale-95">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-slate-800">Dental Checkup</div>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Past</span>
                </div>
                <div className="text-sm text-slate-500 flex gap-2">
                  <Calendar size={16}/> Fri, 2nd Aug
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= BIG BOLD CTA ================= */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
          >
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Don't gamble with your health.
              </h2>
              <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
                Join 10,000+ Rwandans who have switched to a smarter, faster way to see a doctor.
              </p>
              <Link to="/Signup">
              <button className="bg-teal-500 text-slate-900 hover:bg-teal-400 px-10 py-5 rounded-2xl font-bold text-xl transition transform hover:scale-105">
                Get Started for Free
              </button>
              </Link>
              <p className="mt-6 text-slate-500 text-sm">No credit card required for sign up.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;