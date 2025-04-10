"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react"

export default function Home() {
  const homeRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const ourFirmRef = useRef<HTMLElement>(null)
  const newsRef = useRef<HTMLElement>(null)
  const trackRefundRef = useRef<HTMLElement>(null)
  const resourcesRef = useRef<HTMLElement>(null)
  const contactUsRef = useRef<HTMLElement>(null)
  const reviewsRef = useRef<HTMLElement>(null)

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop ?? 0,
      behavior: "smooth",
    })
  }

  const currentDate = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = currentDate.toLocaleDateString("en-US", options).toUpperCase()

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/hw.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-gray-200 text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection(ourFirmRef)}
                className="text-gray-200 text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                OUR FIRM
              </button>
              <button
                onClick={() => scrollToSection(newsRef)}
                className="text-gray-200 text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                NEWS
              </button>
              <button
                onClick={() => scrollToSection(contactUsRef)}
                className="text-gray-200 text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                CONTACT US
              </button>
            </div>
            <button
              onClick={() => scrollToSection(trackRefundRef)}
              className="bg-[#4169e1] text-white text-sm px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-[#2845c4] hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Get started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="bg-transparent min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-[#4169e1] text-6xl md:text-7xl font-bold mb-6 leading-tight">
              HW Hanna Warner & Associates CPAs
            </h1>
            <p className="text-gray-300 text-xl mb-8">Professional Tax & Accounting Services</p>
            <div className="flex items-center justify-center">
              <p className="text-gray-400 mr-2">CALL TODAY:</p>
              <a
                href="tel:303.777.0527"
                className="text-[#4169e1] font-bold text-2xl hover:text-[#2845c4] transition-colors"
              >
                303.777.0527
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Tax Services</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Individual Tax Preparation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business Tax Preparation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tax Planning & Consulting</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>IRS Representation</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Accounting Services</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bookkeeping</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Financial Statement Preparation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Payroll Services</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>QuickBooks Setup & Training</span>
                </li>
              </ul>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Business Advisory</h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business Formation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Strategic Planning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Financial Analysis</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Succession Planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Firm Section */}
      <section ref={ourFirmRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Firm</h2>
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-200 mb-6">
              Hanna Warner & Associates CPAs is a full-service accounting firm serving clients throughout the Denver
              metro area. We are dedicated to providing our clients with professional, personalized services and
              guidance in a wide range of financial and business needs.
            </p>
            <p className="text-gray-200 mb-6">
              Founded in 1985, we have established a reputation for excellence in our field. Our expertise ranges from
              basic tax management and accounting services to more in-depth services such as financial statements and
              planning.
            </p>
            <p className="text-gray-200">
              Our mission is to help clients maintain financial viability in the present while taking a proactive
              approach to achieve future goals. This requires open communication to reach an understanding of our
              clients' needs, thorough research, and sound analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 italic mb-4">
                "Hanna Warner & Associates has been handling my taxes for over 10 years. They are professional,
                knowledgeable, and always available to answer my questions. I highly recommend their services."
              </p>
              <p className="text-blue-700 font-semibold">- John D.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 italic mb-4">
                "As a small business owner, I rely on Hanna Warner & Associates for all my accounting needs. Their
                expertise has saved me both time and money. Their team is responsive and thorough."
              </p>
              <p className="text-blue-700 font-semibold">- Sarah M.</p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 italic mb-4">
                "I've been working with Hanna Warner & Associates for my personal and business taxes for several years.
                They are always professional, prompt, and provide excellent service."
              </p>
              <p className="text-blue-700 font-semibold">- Michael R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section ref={newsRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">News & Updates</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">2025 Tax Filing Season Now Open</h3>
              <p className="text-gray-500 text-sm mb-4">April 9, 2025</p>
              <p className="text-gray-200">
                The IRS has officially opened the 2025 tax filing season. We are now accepting appointments for tax
                preparation services. Contact our office to schedule your appointment today.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">New Tax Laws for 2025</h3>
              <p className="text-gray-500 text-sm mb-4">March 15, 2025</p>
              <p className="text-gray-200">
                Several new tax laws have gone into effect for the 2025 tax year. Our team is fully updated on these
                changes and ready to help you navigate them. Contact us for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Refund Section */}
      <section ref={trackRefundRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Track Your Refund</h2>
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-gray-200 mb-6">
              You can check the status of your federal tax refund by visiting the IRS "Where's My Refund?" tool. You
              will need your Social Security number, filing status, and exact refund amount.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.irs.gov/refunds"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Check Refund Status
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section ref={resourcesRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="https://www.irs.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg hover:bg-black/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Internal Revenue Service</h3>
              <p className="text-gray-200">
                Access tax forms, publications, and information about federal tax laws and regulations.
              </p>
            </a>

            <a
              href="https://www.colorado.gov/tax"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg hover:bg-black/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Colorado Department of Revenue</h3>
              <p className="text-gray-200">
                Find information about Colorado state taxes, forms, and filing requirements.
              </p>
            </a>

            <a
              href="https://www.sba.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/40 backdrop-blur-sm p-6 rounded-lg hover:bg-black/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Small Business Administration</h3>
              <p className="text-gray-200">
                Resources for small business owners, including financing options and business planning.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section ref={contactUsRef} className="py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Office Hours:</h3>
                <div className="flex items-start mb-3">
                  <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-200">8:00 - 4:00 Monday through Thursday</p>
                    <p className="text-gray-200">8:00 - 12:00 on Friday</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Office Address:</h3>
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-200">Financial Plaza at Union Square</p>
                    <p className="text-gray-200">225 Union Square, Suite 300</p>
                    <p className="text-gray-200">Lakewood, CO 80228</p>
                  </div>
                </div>

                <div className="flex items-start mb-3">
                  <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <a href="tel:303.777.0527" className="text-gray-200 hover:text-blue-600 transition-colors">
                    303.777.0527
                  </a>
                </div>

                <p className="text-gray-200 mt-4">There is ample free parking surrounding our building.</p>

                <p className="text-gray-200 mt-4">
                  We now have online invoice payment options.
                  <a href="#" className="text-blue-600 hover:text-blue-800 ml-1 transition-colors">
                    Click Here To Pay Now
                  </a>
                </p>
              </div>
            </div>

            <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.2273462722236!2d-105.1316!3d39.7238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x8670b761b16640!2s225%20Union%20Blvd%2C%20Lakewood%2C%20CO%2080228!5e0!3m2!1sen!2sus!4v1649451465783!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent border-t border-gray-600">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} HANNA WARNER & ASSOCIATES CPAS</p>
            </div>

            <div className="flex flex-wrap justify-center space-x-4">
              <button
                onClick={() => scrollToSection(homeRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                HOME
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                SERVICES
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(ourFirmRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                OUR FIRM
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(newsRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                NEWS
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(trackRefundRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                TRACK REFUND
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(resourcesRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                RESOURCES
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => scrollToSection(contactUsRef)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                CONTACT US
              </button>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">PRIVACY POLICY | TAX & ACCOUNTING WEBSITES BY SERVICE2CLIENT, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
