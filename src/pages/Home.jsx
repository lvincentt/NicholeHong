import { services, portfolio } from "./data";

export default function Home() {
  return (
    <div className="w-full text-gray-900 bg-white">
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20" />

        {/* Animated Floating Elements */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/20 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 right-20 w-16 h-16 border border-white/15 rounded-full animate-float" />

        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            {/* Animated Typography */}
            <div className="overflow-hidden">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-4 animate-slide-up">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-50">
                  NICHOLE
                </span>
              </h1>
            </div>

            <div className="overflow-hidden">
              <h2 className="text-6xl md:text-7xl font-light tracking-widest text-white/90 mb-6 animate-slide-up-delay">
                HONG
              </h2>
            </div>

            <div className="overflow-hidden">
              <p className="text-xl text-white/80 font-light tracking-wider mb-10 animate-slide-up-delay-2">
                PORTRAIT ARTIST & VISUAL STORYTELLER
              </p>
            </div>

            {/* Magnetic Button */}
            <button className="group relative px-10 py-4 bg-transparent border-2 border-white/30 rounded-full overflow-hidden transition-all duration-500 hover:border-white/60 hover:scale-105 animate-fade-in">
              <span className="relative z-10 text-white text-lg tracking-wider font-light group-hover:translate-x-2 transition-transform">
                EXPLORE MY WORLD
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>
      {/* About Section */}
      <section className="relative min-h-screen flex items-center px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full py-32">
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/5 to-transparent" />

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image with Frame Effect */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1585898438831-7c689f5c8ff3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Nichole"
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
                  />
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%220.5%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-6 -bottom-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl rotate-6 group-hover:rotate-0 transition-all duration-500">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-rose-400" />
                  <span className="text-sm tracking-widest text-gray-500">
                    THE ARTIST
                  </span>
                </div>

                <h2 className="text-5xl font-light mb-8 leading-tight">
                  Capturing the{" "}
                  <span className="italic text-gray-700">soul</span> behind
                  <br />
                  <span className="font-semibold">every moment</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  I believe photography is more than just images—it's about
                  preserving
                  <span className="text-gray-900 font-medium">
                    {" "}
                    emotions, stories, and legacy
                  </span>
                  . Based in Jakarta, I specialize in crafting visual narratives
                  that feel authentic, intimate, and timeless. My approach
                  blends editorial precision with documentary authenticity.
                </p>

                {/* Signature */}
                <div className="flex items-center gap-8">
                  <div className="font-cursive text-2xl text-gray-800 border-l-4 border-amber-300 pl-4 py-2">
                    Nichole Hong
                  </div>
                  <div className="text-sm text-gray-500">
                    Featured in{" "}
                    <span className="font-semibold">Vogue, NatGeo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm tracking-widest text-gray-500 bg-white px-4 py-2 rounded-full border inline-block mb-4">
              OFFERINGS
            </span>
            <h2 className="text-5xl font-light mb-6">
              Bespoke <span className="font-semibold">Experiences</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each session is a collaborative journey, tailored to your story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="group relative h-[500px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} rounded-3xl border ${s.border} transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-2xl`}
                />

                <div className="relative h-full p-10 flex flex-col">
                  <div className="mb-6">
                    <div className="text-sm tracking-widest text-gray-500 mb-2">
                      {s.id}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                    <p className="text-gray-600 text-sm">{s.desc}</p>
                  </div>

                  <div className="mt-auto space-y-6">
                    <div className="space-y-2">
                      {s.features.map((f, i) => (
                        <div key={i} className="text-sm flex gap-2">
                          <span>•</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/30">
                      <div className="font-bold">{s.price}</div>
                      <button className="mt-4 w-full py-3 bg-white/90 rounded-full text-sm tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-all">
                        INQUIRE NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-light mb-4">
                Visual <span className="font-semibold">Narratives</span>
              </h2>
              <p className="text-gray-600">
                A curated selection of recent stories
              </p>
            </div>

            <button className="group flex items-center gap-3 text-sm tracking-widest">
              VIEW ALL WORKS
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* MASONRY GRID */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {portfolio.map((item, idx) => (
              <div key={idx} className="relative group break-inside-avoid">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ height: `${item.h}px` }}
                    className="w-full object-cover grayscale scale-110 
                         group-hover:grayscale-0 group-hover:scale-100 
                         transition-all duration-1000"
                  />
                </div>

                {/* OVERLAY */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 
                       bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 
                       transition-all duration-500"
                >
                  <div className="text-white">
                    <div className="text-sm tracking-widest mb-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/60">2024 COLLECTION</div>
                  </div>
                </div>

                {/* VIEW BADGE */}
                <div
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                       px-3 py-1 rounded-full text-xs 
                       opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  VIEW
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-white to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%239C92AC fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-10">
            <div className="text-8xl font-light text-white/5 mb-4">"</div>
            <p className="text-2xl text-white/90 italic font-light max-w-2xl mx-auto">
              Let's create something extraordinary together
            </p>
          </div>

          <h2 className="text-6xl font-light text-white mb-10">
            Ready to <span className="font-semibold">Begin?</span>
          </h2>

          <div className="space-y-6 mb-12">
            <div>
              <div className="text-sm tracking-widest text-white/60 mb-2">
                EMAIL
              </div>
              <a
                href="mailto:nichole@studio.com"
                className="text-2xl text-white hover:text-amber-200 transition-colors"
              >
                nichole@studio.com
              </a>
            </div>
            <div>
              <div className="text-sm tracking-widest text-white/60 mb-2">
                INSTAGRAM
              </div>
              <a
                href="#"
                className="text-xl text-white/90 hover:text-amber-200 transition-colors"
              >
                @nichole.studio
              </a>
            </div>
          </div>

          <button className="group relative px-12 py-5 bg-white text-black rounded-full text-lg font-semibold tracking-wider overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10">START YOUR JOURNEY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <div className="mt-20 pt-8 border-t border-white/10">
            <div className="text-white/40 text-sm tracking-widest">
              JAKARTA • BALI • SINGAPORE • TOKYO
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
