import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
        <nav className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-[#D4AF37]/30 px-10 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#D4AF37] tracking-wide">⚡ Thunder</h1>
          <ul className="hidden md:flex gap-10 text-gray-400 font-medium">
            {["Home", "Features", "Ratings", "Pricing", "Contact"].map((item) => (
              <li key={item} className="relative cursor-pointer transition-all duration-300 hover:text-[#D4AF37]">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="px-6 py-3 rounded-full font-semibold bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[#E6C76A] hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </nav>

        <section id="home" className="px-6 py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold
                     bg-[#D4AF37]/15 text-[#D4AF37]
                     border border-[#D4AF37]/40">
              ⚡ Built for modern businesses
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Your Store.
              <br />
              <span className="text-transparent bg-clip-text
                       bg-gradient-to-r from-[#D4AF37] via-[#E6C76A] to-[#D4AF37]">
                Live in Hours, Not Weeks.
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
              Thunder gives you everything you need to sell online — storefront,
              payments, analytics, and growth tools — all in one powerful platform.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-10 py-4 rounded-xl font-semibold
                                bg-[#D4AF37] text-black
                                shadow-[0_0_30px_rgba(212,175,55,0.45)]
                                hover:bg-[#E6C76A] hover:scale-105
                                transition-all duration-300">
                Launch Your Store
              </button>
              <button className="px-10 py-4 rounded-xl font-semibold
                                border border-[#D4AF37]/50 text-[#D4AF37]
                                hover:bg-[#D4AF37]/10
                                transition-all duration-300">
                Watch How It Works
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl
                    bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-[#D4AF37]/20
                    blur-3xl"></div>
              <div className="relative bg-black/90 backdrop-blur-xl
                    border border-[#D4AF37]/30
                    rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.9)]
                    overflow-hidden">
                <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                <div>
                <h4 className="text-sm font-semibold text-white">Thunder Assistant</h4>
                <p className="text-xs text-gray-400">Guided store setup</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium
                         bg-[#D4AF37]/15 text-[#D4AF37]
                         border border-[#D4AF37]/40">
                Online
              </span>
            </div>
            <div className="p-6 space-y-6 text-sm">
              <div className="bg-[#D4AF37]/10 rounded-2xl p-5 text-gray-200">
                  👋 Welcome to <span className="font-semibold text-white">Thunder</span>!
                  <br />
                  I’ll help you launch your store step by step.
              </div>
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full
                            bg-[#D4AF37] text-black text-sm font-bold">
                  {step}
                </div>
                <div className="bg-[#D4AF37]/10 rounded-2xl p-5 text-gray-200">
                  {step === 1 && "Add your first product by uploading images, pricing, and stock details."}
                  {step === 2 && "Customize your storefront to match your brand."}
                  {step === 3 && "Connect payments and publish your store."}
                </div>
                </div>
              ))}
          </div>

              <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Estimated setup time: <span className="text-white">5 minutes</span>
                </span>
                <button className="px-5 py-3 rounded-xl font-semibold
                                  border border-[#D4AF37]/50 text-[#D4AF37]
                                  hover:bg-[#D4AF37]/10
                                  transition-all duration-300">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="relative px-8 py-28 bg-[#070707] overflow-hidden">
          <div className="absolute left-0 top-6 h-14 w-1 rounded-full
                  bg-gradient-to-b from-[#D4AF37] to-[#E6C76A]"></div>
            <div className="relative text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                Key{" "}
                <span className="text-transparent bg-clip-text
                        bg-gradient-to-r from-[#D4AF37] to-[#E6C76A]">
                  Features
                </span>
              </h3>
              <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                Everything you need to launch, manage, and grow a powerful online store.
              </p>
            </div>
            <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {[
                ["Drag & Drop Builder", "Design your store visually without writing code."],
                ["Secure Payments", "Accept payments from trusted global gateways."],
                ["Inventory Control", "Track products, orders, and stock instantly."],
                ["Analytics Dashboard", "Understand sales, traffic, and customers."],
                ["Marketing Suite", "Run campaigns, SEO, and promotions easily."],
                ["Scalable Infrastructure", "Grow without worrying about performance."]
              ].map(([title, desc], index) => (
                <div
                  key={title}
                  className="group relative rounded-3xl p-8
                            bg-black/70 backdrop-blur-xl
                            border border-[#D4AF37]/20
                            transition-all duration-500
                            hover:-translate-y-2
                            hover:border-[#D4AF37]/50
                            hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
                >
                  <div className="absolute left-0 top-6 h-14 w-1 rounded-full
                                bg-gradient-to-b from-[#D4AF37] to-[#E6C76A]"></div>
                  <span className="text-xs tracking-widest text-gray-500 font-semibold">
                    FEATURE {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-3 text-xl font-semibold text-white
                                group-hover:text-[#D4AF37] transition">
                    {title}
                  </h4>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {desc}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100
                                  transition text-sm text-[#D4AF37]">
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
        </section>

        <section id="ratings" className="px-8 py-28 bg-[#070707] text-white">
          <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#D4AF37]">What Our Customers Say</h3>
              <p className="text-gray-400 mb-12">
                Real reviews from businesses using Thunder to grow online.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: "Nishanth", rating: 5, comment: "Thunder made launching my store a breeze!" },
                  { name: "Ajmal", rating: 5, comment: "Amazing platform with great support." },
                  { name: "Nagulan", rating: 4, comment: "Execellent Assit With AI Chatbox." },
                  { name: "Praneeth", rating: 4, comment: "Gaining great Knowledge for my business" },
                  { name: "Nishal", rating: 4, comment: "Have Thunder,Do Nothing." },
                  { name: "Nitish", rating: 5, comment: "Highly recommend for small businesses!" }
                ].map((review, idx) => (
                  <div key={idx} className="bg-black/70 backdrop-blur-xl p-6 rounded-2xl border border-[#D4AF37]/20">
                    <div className="flex items-center mb-4">
                      <span className="text-[#D4AF37] font-bold mr-2">{review.rating}★</span>
                      <span className="text-gray-300 font-semibold">{review.name}</span>
                    </div>
                    <p className="text-gray-400">{review.comment}</p>
                  </div>
                ))}
              </div>
          </div>
        </section>

      <section id="pricing" className="relative px-8 py-28 bg-[#070707] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#D4AF37]/5"></div>
        <div className="relative text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text
                            bg-gradient-to-r from-[#D4AF37] to-[#E6C76A]">
              Pricing
            </span>
          </h3>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Choose the plan that fits your business today. Upgrade anytime as you grow.
          </p>
        </div>
        <div className="relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="relative bg-black/70 backdrop-blur-xl
                    border border-[#D4AF37]/20
                    rounded-3xl p-10
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
            <h4 className="text-lg font-semibold text-gray-300">Free</h4>
            <p className="mt-4 text-4xl font-extrabold text-white">₹0</p>
            <p className="mt-1 text-sm text-gray-500">Forever free</p>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li>✔ Up to 50 products</li>
              <li>✔ Basic analytics</li>
              <li>✔ Community support</li>
            </ul>
            <button className="mt-10 w-full py-3 rounded-xl
                              border border-[#D4AF37]/40 text-[#D4AF37]
                              hover:bg-[#D4AF37]/10 transition">
              Get Started
            </button>
          </div>
          <div className="relative rounded-3xl p-12
                    bg-gradient-to-br from-[#D4AF37] to-[#E6C76A]
                    text-black shadow-[0_30px_80px_rgba(212,175,55,0.45)]
                    scale-105">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2
                       px-4 py-1 text-xs font-semibold rounded-full
                       bg-black text-[#D4AF37]
                       border border-[#D4AF37]/50">
              Most Popular
            </span>
            <h4 className="text-lg font-semibold">Pro</h4>
            <p className="mt-4 text-4xl font-extrabold">₹999</p>
            <p className="mt-1 text-sm text-black/70">Per month</p>
            <ul className="mt-8 space-y-4 text-black/80 font-medium">
              <li>✔ Unlimited products</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Priority support</li>
              <li>✔ Marketing tools</li>
            </ul>
            <button className="mt-10 w-full py-4 rounded-xl
                              bg-black text-[#D4AF37] font-semibold
                              hover:scale-105 transition-all duration-300">
              Upgrade to Pro
            </button>
          </div>
          <div className="relative bg-black/70 backdrop-blur-xl
                    border border-[#D4AF37]/20
                    rounded-3xl p-10
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)]">
            <h4 className="text-lg font-semibold text-gray-300">Enterprise</h4>
            <p className="mt-4 text-4xl font-extrabold text-white">Custom</p>
            <p className="mt-1 text-sm text-gray-500">Tailored solutions</p>
            <ul className="mt-8 space-y-4 text-gray-400">
              <li>✔ Dedicated account manager</li>
              <li>✔ Custom features</li>
              <li>✔ Full support & SLA</li>
            </ul>
            <button className="mt-10 w-full py-3 rounded-xl
                              border border-[#D4AF37]/40 text-[#D4AF37]
                              hover:bg-[#D4AF37]/10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <section className="relative px-8 py-28 bg-[#070707] overflow-hidden">
        <div className="absolute inset-0
                        bg-gradient-to-r from-[#D4AF37]/20 via-transparent to-[#E6C76A]/20"></div>
          <div className="relative max-w-5xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Launch your store with{" "}
              <span className="text-transparent bg-clip-text
                            bg-gradient-to-r from-[#D4AF37] to-[#E6C76A]">
                Thunder
              </span>{" "}
              today
            </h3>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Join thousands of businesses using Thunder to sell, scale, and succeed
              online — without complexity or hidden costs.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-4 rounded-xl font-semibold
                                bg-gradient-to-r from-[#D4AF37] to-[#E6C76A]
                                text-black
                                shadow-[0_20px_60px_rgba(212,175,55,0.35)]
                                hover:scale-110 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-12 py-4 rounded-xl font-semibold
                                border border-[#D4AF37]/40 text-[#D4AF37]
                                hover:bg-[#D4AF37]/10 transition-all duration-300">
                Talk to Sales
              </button>
            </div>
            <div className="mt-14 flex justify-center gap-8 text-gray-400 text-sm">
              <span>✔ No credit card required</span>
              <span>✔ Cancel anytime</span>
              <span>✔ Secure payments</span>
            </div>
          </div>
      </section>

      <footer id="contact" className="bg-[#040813] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-[#D4AF37] mb-4">⚡ Thunder</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Thunder is a modern e-commerce platform built to help businesses
              launch faster and scale smarter.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-[#D4AF37] mb-4">Product</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#D4AF37] cursor-pointer">Features</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Pricing</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Demo</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Updates</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-[#D4AF37] mb-4">Company</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#D4AF37] cursor-pointer">About</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Careers</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Contact</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-[#D4AF37] mb-4">Legal</h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-[#D4AF37] cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Terms of Service</li>
              <li className="hover:text-[#D4AF37] cursor-pointer">Security</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D4AF37]/20 py-6 text-center text-gray-400 text-sm">
          © 2025 Thunder & Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
