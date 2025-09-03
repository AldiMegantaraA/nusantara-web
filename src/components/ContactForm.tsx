import React, { useState } from 'react';
import { Send, ChevronDown } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    customerType: 'Individual',
    companyName: '',
    email: '',
    message: ''
  });
  const API_URL = import.meta.env.VITE_API_URL;
  const [country, setCountry] = useState('+62')
  const customerTypes = [
    'Individual',
    'Corporate'
  ];

  const countryCodes = [
    { code: '+62', country: 'ID', flag: '🇮🇩' },
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+60', country: 'MY', flag: '🇲🇾' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleInputChangeCountry = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { value } = e.target;
    setCountry(value);
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = "POST";
      const response = await fetch(`${API_URL}?type=message`, {
        method,
        headers: {
          'Content-Type': 'text/plain',
        },
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify({...formData, phone: `${country}${formData.phone}`})
      });

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully! We will respond to you as soon as possible.');
        setFormData({
            name: '',
            phone: '',
            customerType: '',
            companyName: '',
            email: '',
            message: ''
          });
      } else {
        alert("Failed to send message!");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#711917] via-[#0A0A0A] to-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Get in touch with our
              <br />
              Customer Service
            </h2>
            <p className="text-xl text-red-100 leading-relaxed">
              We will respond to you as soon as possible.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full outline-none px-4 py-3 bg-transparent border border-[#OAOAOA] rounded-lg text-[#OAOAOA] placeholder-[#4B4B4B] focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                    Phone number*
                  </label>
                  <div className="grid grid-cols-[60px_auto] gap-0 border border-[#OAOAOA] rounded-lg">
                    <div className="relative">
                      <select
                        name="country"
                        value={country}
                        onChange={handleInputChangeCountry}
                        className="appearance-none bg-transparent outline-none px-1 py-3 text-[#4B4B4B]"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code} className="bg-gray-800 text-[#OAOAOA]">
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute left-14 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#4B4B4B] pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Phone number"
                      className="px-4 py-3 bg-transparent text-[#OAOAOA] placeholder-[#4B4B4B] outline-none w-44"
                    />
                  </div>
                </div>
              </div>

              {/* Customer Type and Company Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                    Individual/corporate*
                  </label>
                  <div className="relative">
                    <select
                      name="customerType"
                      value={formData.customerType}
                      onChange={handleInputChange}
                      required
                      className="w-full outline-none appearance-none px-4 py-3 bg-transparent border border-[#OAOAOA] rounded-lg text-[#4B4B4B] focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 pr-10"
                    >
                      {customerTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-800 text-[#OAOAOA]">
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#4B4B4B] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="w-full outline-none px-4 py-3 bg-transparent border border-[#OAOAOA] rounded-lg text-[#OAOAOA] placeholder-[#4B4B4B] focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full outline-none px-4 py-3 bg-transparent border border-[#OAOAOA] rounded-lg text-[#OAOAOA] placeholder-[#4B4B4B] focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#OAOAOA] text-sm font-medium mb-2">
                  Please tell us about your inquiries
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Type your message here"
                  className="w-full outline-none px-4 py-3 bg-transparent border border-[#OAOAOA] rounded-lg text-[#OAOAOA] placeholder-[#4B4B4B] focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="group bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? 'Sending...' : 'Send message'}</span>
                  <div className="w-8 h-8 bg-[#711917] rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;