import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Starter',
    price: 'Custom Pricing',
    description: 'Perfect for small practices and clinics',
    features: [
      'Up to 10,000 studies per year',
      'Cloud storage (5TB)',
      'Basic viewer functionality',
      'Standard reporting tools',
      'Basic AI report templates',
      'Email support',
      '99.5% uptime SLA',
    ],
    cta: 'Request Quote',
    mostPopular: false,
  },
  {
    name: 'Professional',
    price: 'Custom Pricing',
    description: 'Designed for growing practices and imaging centers',
    features: [
      'Up to 50,000 studies per year',
      'Cloud storage (20TB)',
      'Advanced visualization tools',
      'AI-assisted reporting with voice dictation',
      'Custom report templates',
      'Priority email and phone support',
      '99.9% uptime SLA',
      'Custom workflow configuration',
      'Referring physician portal',
    ],
    cta: 'Request Quote',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    description: 'For hospitals and healthcare networks',
    features: [
      'Unlimited studies',
      'Scalable cloud storage',
      'Full suite of advanced tools',
      'Advanced AI reporting with natural language processing',
      'Multi-specialty report templates',
      'AI-assisted diagnostics',
      '24/7 dedicated support',
      '99.99% uptime SLA',
      'Custom integrations',
      'Multi-site deployment',
      'Advanced analytics dashboard',
    ],
    cta: 'Request Quote',
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Plans for organizations of all sizes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose the perfect plan for your healthcare facility's needs and budget.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-5xl lg:mx-auto xl:max-w-none xl:mx-0">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${
                tier.mostPopular
                  ? 'border-blue-600 shadow-md'
                  : 'border-gray-200'
              } border rounded-lg shadow-sm divide-y divide-gray-200 bg-white`}
            >
              {tier.mostPopular && (
                <div className="bg-blue-600 rounded-t-lg px-6 py-1">
                  <p className="text-xs font-medium text-white text-center">Most Popular</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-2xl font-extrabold text-gray-900">{tier.price}</span>
                </p>
                <a
                  href="#contact"
                  className={`${
                    tier.mostPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-blue-50 hover:bg-blue-100 text-blue-700'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.cta}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 