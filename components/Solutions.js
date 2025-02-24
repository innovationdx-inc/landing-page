import Image from 'next/image';

const solutions = [
  {
    title: 'Hospital Enterprise PACS',
    description: 'A comprehensive imaging solution for large hospitals and healthcare networks, supporting multiple departments and facilities with centralized management.',
    features: [
      'Centralized image repository',
      'Cross-department workflow integration',
      'Enterprise-wide user management',
      'High-volume study handling',
      'Advanced load balancing'
    ],
    color: 'bg-blue-600',
  },
  {
    title: 'Radiology Practice PACS',
    description: 'Tailored for radiology practices and imaging centers, optimizing radiologist workflow and reporting efficiency.',
    features: [
      'Streamlined reading workflow',
      'Integrated reporting templates',
      'Referring physician portal',
      'Subspecialty routing',
      'Business analytics dashboard'
    ],
    color: 'bg-indigo-600',
  },
  {
    title: 'Specialty Clinic PACS',
    description: 'Specialized solutions for cardiology, orthopedics, ophthalmology, and other specialty practices with modality-specific tools.',
    features: [
      'Specialty measurement tools',
      'Procedure-specific workflows',
      'Modality-optimized viewing',
      'Specialty reporting templates',
      'Integration with specialty EMRs'
    ],
    color: 'bg-purple-600',
  },
];

export default function Solutions() {
  return (
    <div id="solutions" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored PACS Solutions for Every Need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer specialized PACS solutions designed for different healthcare environments and specialties.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8">
            {solutions.map((solution) => (
              <div key={solution.title} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`${solution.color} py-6 px-6`}>
                  <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-500 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 