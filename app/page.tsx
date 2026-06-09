"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  MessageSquare,
  Ruler,
  Printer,
  FileText,
  Factory,
  Cog,
  Layers3,
  Wrench,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Mechanical 3D Models",
    description:
      "Production-ready Siemens NX mechanical modelling for engineering and manufacturing applications.",
    icon: Cog,
  },
  {
    title: "3D Printing & Prototyping",
    description:
      "Rapid prototyping workflows that transform concepts into real-world manufactured components.",
    icon: Factory,
  },
  {
    title: "Design Consultancy",
    description:
      "Engineering-focused consultancy for manufacturability, optimisation, and product development.",
    icon: Layers3,
  },
  {
    title: "2D Drawings & Documentation",
    description:
      "Detailed manufacturing drawings, technical documentation, and precision drafting.",
    icon: Wrench,
  },
]

export default function CADProjectsWebsite() {
  return (
    <main className="bg-black text-white overflow-x-hidden selection:bg-[#FF834F] selection:text-black">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/transparent.png"
              alt="CAD Projects LTD"
              className="h-10 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#services" className="hover:text-[#FF834F] transition">
              Services
            </a>
            <a href="#process" className="hover:text-[#FF834F] transition">
              Process
            </a>
            <a href="#contact" className="hover:text-[#FF834F] transition">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/metal-texture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 opacity-[0.15] bg-[url('/cad-grid.jpg')] bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 border border-[#FF834F]/20 bg-[#FF834F]/10 px-5 py-2 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#FF834F] animate-pulse" />
              <span className="text-sm uppercase tracking-[0.25em] text-[#FFAE78]">
                Siemens NX • Mechanical CAD • Prototyping
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
              We Turn
              <span className="block text-[#FF834F]">Concepts</span>
              Into Reality
            </h1>

            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
              Premium CAD engineering solutions for manufacturers, innovators,
              and engineering teams. From precision 3D modelling to
              manufacturing-ready technical documentation.
            </p>

            <div className="flex flex-wrap gap-5">
<a
  href="#contact"
  className="group px-8 py-5 bg-[#FF834F] hover:bg-[#FFAE78] text-black rounded-2xl font-semibold transition-all duration-300 inline-flex items-center"
>
  Contact Us
  <ArrowRight className="group-hover:translate-x-1 transition" />
</a>             

<a
  href="#services"
  className="px-8 py-5 border border-white/10 hover:border-[#FF834F]/40 rounded-2xl transition-all duration-300 text-zinc-300 inline-flex items-center"
>
  View Services
</a>
            </div>
          </div>

<div className="relative hidden lg:block">
            <motion.div
              className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950/60 backdrop-blur-xl shadow-2xl"
            >
              <img
                src="/laptop.jpg"
                alt="CAD workflow"
                className="w-full h-[700px] object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FFAE78] mb-3">
                  Engineering Precision
                </p>

                <h3 className="text-3xl font-bold leading-tight">
                  Industrial CAD workflows built for production.
                </h3>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* IMAGE STRIP */}
      <section className="relative py-10 border-y border-white/5 bg-zinc-950">
        <div className="grid md:grid-cols-3 gap-4 px-4">
          {[
            "/printing.jpg",
            "/customer.jpg",
            "/cad_projects_CPBorder-strip.png",
          ].map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 h-[320px]"
            >
              <img
                src={image}
                className="w-full h-full object-cover"
                alt="CAD Projects"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-40 bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#FF834F_0,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-24">
            <p className="uppercase tracking-[0.3em] text-[#FFAE78] text-sm mb-5">
              Services
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[1] mb-8">
              Industrial CAD
              <span className="block text-[#FF834F]">Solutions</span>
            </h2>

            <p className="text-zinc-400 text-xl leading-relaxed">
              High-end engineering support for modern manufacturing,
              prototyping, and product development workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-10 rounded-[2rem] border border-white/10 bg-zinc-950/70 hover:border-[#FF834F]/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-[#FF834F]/10 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl border border-[#FF834F]/20 bg-[#FF834F]/10 flex items-center justify-center mb-8">
                      <Icon className="text-[#FF834F]" size={28} />
                    </div>

                    <h3 className="text-3xl font-bold mb-5">
                      {service.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

{/* FEATURED VIDEO */}
<section className="relative py-32 bg-black border-y border-white/10">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-16 text-center">
      <p className="text-[#FF834F] uppercase tracking-[0.3em] text-sm mb-4">
        Inside CAD Projects
      </p>

      <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
        Engineering Ideas Into Reality
      </h2>

      <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
        A closer look into our Siemens NX workflow, rapid prototyping process,
        and collaborative mechanical design approach.
      </p>
    </div>

    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/I8RGWT5M0Hw?autoplay=1&mute=1&loop=1&playlist=I8RGWT5M0Hw&controls=1&modestbranding=1&rel=0"
        title="CAD Projects Showcase"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

  </div>
</section>

      {/* PROCESS */}
      <section id="process" className="relative py-40 bg-zinc-950 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-[#FFAE78] text-sm mb-5">
              Workflow
            </p>

<h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-10">
  Concept
  <span className="block text-[#FF834F]">to Production</span>
</h2>

            <div className="space-y-10">
{[
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Understanding your requirements, objectives and manufacturing constraints to define a clear project scope and engineering approach.",
  },
  {
    number: "02",
    title: "CAD Development & Mechanical Design",
    description:
      "Developing detailed 3D CAD models and engineering solutions using Siemens NX with a focus on functionality, manufacturability and performance.",
  },
  {
    number: "03",
    title: "Prototype Development & Validation",
    description:
      "Producing functional prototypes and design iterations to validate form, fit and function before committing to production.",
  },
  {
    number: "04",
    title: "Manufacturing & Technical Documentation",
    description:
      "Creating production-ready engineering drawings, assembly documentation and technical deliverables to support manufacturing and procurement.",
  },
].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-5xl font-black text-[#FF834F]/30">
{step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
<p className="text-zinc-500 leading-relaxed">
  {step.description}
</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


      <div className="mt-20">
        <div className="relative">

<div className="absolute top-10 left-[5%] right-[5%] h-[2px] bg-[#FF834F]/30"></div>

          <div className="relative flex justify-between items-start gap-4">

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FF834F] text-black flex items-center justify-center text-4xl">
<MessageSquare className="w-8 h-8 text-black" />
              </div>
              <h4 className="mt-4 font-bold">Consultation</h4>
            </div>
<ChevronRight className="w-6 h-6 text-[#FF834F]/60 mt-7" />
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FF834F] text-black flex items-center justify-center text-4xl">
<Ruler className="w-8 h-8 text-black" />
              </div>
              <h4 className="mt-4 font-bold">CAD Design</h4>
            </div>
<ChevronRight className="w-6 h-6 text-[#FF834F]/60 mt-7" />
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FF834F] text-black flex items-center justify-center text-4xl">
<Printer className="w-8 h-8 text-black" />
              </div>
              <h4 className="mt-4 font-bold">Prototype</h4>
            </div>
<ChevronRight className="w-6 h-6 text-[#FF834F]/60 mt-7" />
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FF834F] text-black flex items-center justify-center text-4xl">
<FileText className="w-8 h-8 text-black" />
              </div>
              <h4 className="mt-4 font-bold">Documentation</h4>
            </div>
<ChevronRight className="w-6 h-6 text-[#FF834F]/60 mt-7" />
<div className="flex flex-col items-center text-center">
  <div className="w-24 h-24 rounded-full bg-[#FF834F] flex items-center justify-center">
    <Factory className="w-8 h-8 text-black" />
  </div>
  <h4 className="mt-4 font-bold">Production Ready</h4>
</div>

          </div>
        </div>
      </div>

    </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative py-32 bg-black border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto px-6 text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-[#FFAE78] text-sm mb-5">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
            Let’s Build
            <span className="block text-[#FF834F]">Something Real</span>
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you need CAD support, manufacturing documentation, or rapid
            prototyping assistance, CAD Projects LTD is ready to help bring
            your concept into reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="p-10 md:p-14 rounded-[2rem] border border-white/10 bg-zinc-950/70 backdrop-blur-2xl">
<form
  action="https://formspree.io/f/xeewedwd"
  method="POST"
  className="space-y-6"
>

<input
  type="hidden"
  name="_subject"
  value="New CAD Projects Website Enquiry"
/>
              <div className="grid md:grid-cols-2 gap-6">
<input
  name="name"
  placeholder="Full Name"
  className="w-full px-6 py-5 rounded-2xl bg-black border border-white/10 focus:border-[#FF834F] outline-none transition"
/>

<input
  name="company"
  placeholder="Company"
  className="w-full px-6 py-5 rounded-2xl bg-black border border-white/10 focus:border-[#FF834F] outline-none transition"
/>
              </div>

<input
  name="email"
  type="email"
  required
  placeholder="Email Address"
  className="w-full px-6 py-5 rounded-2xl bg-black border border-white/10 focus:border-[#FF834F] outline-none transition"
/>

<textarea
  name="project"
  rows={6}
  placeholder="Tell us about your project..."
  className="w-full px-6 py-5 rounded-2xl bg-black border border-white/10 focus:border-[#FF834F] outline-none transition resize-none"
/>

              <button className="w-full py-5 rounded-2xl bg-[#FF834F] hover:bg-[#FFAE78] text-black font-bold text-lg transition-all duration-300 shadow-2xl shadow-[#FF834F]/20">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="py-10 border-t border-white/5 bg-black">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">

<div className="flex flex-col items-start">
  <img
    src="/transparent.png"
    alt="CAD Projects"
    className="h-10 w-auto"
  />

  <p className="text-zinc-500 text-sm mt-2">
    © 2026 CAD Projects. All rights reserved.
  </p>
</div>
<div className="text-zinc-500 text-sm text-center md:text-right">
  <p>sales@cad-projects.co.uk</p>
  <p>We Turn Concepts Into Reality</p>
</div>

</div> {/* closes max-w-7xl container */}

</footer>
    </main>
  )
}
