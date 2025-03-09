import { 
  CloudArrowUpIcon, 
  LockClosedIcon, 
  ServerIcon,
  DocumentChartBarIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const features = [
  {
    name: 'Hybrid Architecture',
    description: 'Access your medical imaging data securely from anywhere with our hybrid PACS solution.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Enterprise-Grade Security',
    description: 'HIPAA-compliant security measures with end-to-end encryption and comprehensive audit trails.',
    icon: LockClosedIcon,
  },
  {
    name: 'Scalable Infrastructure',
    description: 'Easily scale your imaging storage and processing capabilities as your organization grows.',
    icon: ServerIcon,
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain insights from your imaging data with AI-powered analytics and customizable dashboards.',
    icon: DocumentChartBarIcon,
  },
  // {
  //   name: 'Mobile Accessibility',
  //   description: 'Review studies on-the-go with our responsive mobile applications for iOS and Android.',
  //   icon: DevicePhoneMobileIcon,
  // },
  // {
  //   name: 'Collaborative Tools',
  //   description: 'Enhance team collaboration with real-time annotations, secure sharing, and integrated messaging.',
  //   icon: UserGroupIcon,
  // },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Better Way to Manage Medical Imaging
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            InnovationDX PACS combines cutting-edge technology with intuitive design to transform your diagnostic workflow.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Analytics Screenshot Section */}
        <div className="mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Powerful Analytics Dashboard
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Gain valuable insights into your imaging operations with our comprehensive analytics dashboard. Monitor study volumes, track radiologist performance, and identify optimization opportunities.
              </p>
              <div className="mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Real-time operational metrics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Customizable reporting views</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Trend analysis and forecasting</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <Image
                  src="/images/analytics.png"
                  alt="Analytics Dashboard"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Study List Screenshot Section */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/study-list.png"
                  alt="Comprehensive Study List Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="mb-10 lg:mb-0 order-1 lg:order-2">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Efficient Study Management
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our intuitive study list interface provides powerful filtering, sorting, and prioritization tools to streamline your workflow and ensure critical studies are handled promptly.
              </p>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Advanced filtering and customizable worklists</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Color-coded priority indicators</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">One-click access to patient history and prior studies</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Seamless integration with reporting and AI tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Screenshot Section */}
        <div className="mt-20 pt-10 border-t border-gray-200">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="mb-10 lg:mb-0">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Flexible Study Routing
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Our intelligent routing system ensures studies are automatically directed to the right specialists, facilities, or external partners based on customizable rules.
              </p>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Rule-based study distribution</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Subspecialty matching and load balancing</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Secure external sharing with referring physicians</span>
                  </li>
                  <li className="flex">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-600">Comprehensive audit trail for all study transfers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/destinations.png"
                  alt="Study Routing and Destinations"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 