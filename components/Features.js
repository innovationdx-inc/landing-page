import { 
  CloudArrowUpIcon, 
  LockClosedIcon, 
  ServerIcon,
  DocumentChartBarIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Cloud-Based Architecture',
    description: 'Access your medical imaging data securely from anywhere with our cloud-native PACS solution.',
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
  {
    name: 'Mobile Accessibility',
    description: 'Review studies on-the-go with our responsive mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Collaborative Tools',
    description: 'Enhance team collaboration with real-time annotations, secure sharing, and integrated messaging.',
    icon: UserGroupIcon,
  },
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
      </div>
    </div>
  );
} 