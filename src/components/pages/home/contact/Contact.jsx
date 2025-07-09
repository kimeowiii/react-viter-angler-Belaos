import React from 'react'

const Contact = () => {
  return (
    <>
              {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-center text-blue-200 mb-12 max-w-2xl mx-auto">
              Have questions or need advice? Contact our team of fishing experts
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-blue-200">
                        123 Fisherman's Wharf
                        <br />
                        Harbor City, HC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📞</span>
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-blue-200">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">✉️</span>
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-blue-200">info@anglersparadise.com</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-10 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <span className="text-xl">📘</span>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <span className="text-xl">📸</span>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <span className="text-xl">🐦</span>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition"
                  >
                    <span className="text-xl">▶️</span>
                  </a>
                </div>
              </div>

              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-white"
                    >
                      <option value="">Select a topic</option>
                      <option value="gear">Gear Questions</option>
                      <option value="spots">Fishing Spots</option>
                      <option value="techniques">Fishing Techniques</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 bg-blue-700 border border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-blue-300"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

    </>
  )
}

export default Contact
