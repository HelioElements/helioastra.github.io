export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "HelioAstra",
    "description": "AI-Powered Astrology Software for personalized cosmic insights",
    "url": "https://helioastra.github.io",
    "applicationCategory": "Lifestyle",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              HelioAstra
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              AI-Powered Astrology Software
            </p>
            <p className="text-lg md:text-xl mb-8 opacity-80 max-w-3xl mx-auto">
              Unlock the secrets of the cosmos with revolutionary artificial intelligence that transforms ancient wisdom into personalized insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://forms.gle/3SFMhWY434UuviA9A" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🚀 Get Early Access
              </a>
              <a 
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Why Choose HelioAstra?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                AI-Powered Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced machine learning algorithms analyze celestial patterns to provide personalized astrological readings with unprecedented accuracy.
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Real-Time Calculations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Precise astronomical calculations updated in real-time, ensuring your charts and predictions are always based on current celestial positions.
              </p>
            </article>
            
            <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Interactive Charts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, interactive birth charts and transit visualizations that make complex astrological data easy to understand and explore.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discover Your Destiny?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands who have unlocked their cosmic potential with HelioAstra AI-powered astrology platform.
            </p>
            <a 
              href="https://forms.gle/3SFMhWY434UuviA9A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 HelioAstra. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </>
  );
}
