import React from 'react';

const Features = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Why Choose Us</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Fast</h3>
            <p className="text-gray-700">
              Lightning-fast performance with optimized code and instant load times. Experience speed like never before.
            </p>
          </div>

        
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Modern</h3>
            <p className="text-gray-700">
              Built with cutting-edge technology and modern design principles. Stay ahead with the latest tools.
            </p>
          </div>

          
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Secure</h3>
            <p className="text-gray-700">
              Enterprise-grade security with encrypted data and robust protection. Your information is always safe.
            </p>
          </div>

          
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Reliable</h3>
            <p className="text-gray-700">
              99.9% uptime guarantee with robust infrastructure. Trust us to keep your applications running smoothly.
            </p>
          </div>

         
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Scalable</h3>
            <p className="text-gray-700">
              Grow without limits. Our platform scales effortlessly from startup to enterprise with ease.
            </p>
          </div>

          
          <div className="bg-purple-50 p-8 rounded shadow hover:shadow-lg w-80">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Responsive</h3>
            <p className="text-gray-700">
              Perfect on every device. Beautiful design that adapts seamlessly to mobile, tablet, and desktop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;