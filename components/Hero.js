import Image from 'next/image';

export default function Hero() {
  return (
    <div id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="z-10 py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl">
                <span className="block">Advanced PACS</span>
                <span className="block text-blue-600">for modern radiology</span>
              </h1>
              <p className="mt-4 text-base text-gray-600 sm:text-lg max-w-xl">
                Bring your radiologists' productivity and patient satisfaction to new levels.
              </p>
              <div className="mt-6">
                <div className="rounded-md shadow inline-block">
                  <a
                    href="#contact"
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Schedule demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative flex items-center justify-center h-[500px] lg:h-[600px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/pacs-hero.png"
                alt="PACS Hero Image"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 