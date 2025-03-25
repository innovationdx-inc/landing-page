import Image from 'next/image';
import { MicrophoneIcon, DocumentTextIcon, BoltIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function AIReportGeneration() {
  return (
    <div id="ai-reporting" className="bg-gradient-to-b from-white to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">AI-Powered Reporting</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Streamlined Reporting
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Transform voice dictation into clear, structured reports instantly.
          </p>
        </div>

        <div className="mt-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <div className="relative lg:mt-0">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="bg-blue-600 px-6 py-4">
                    <h3 className="text-lg font-medium text-white">AI Report Generation</h3>
                  </div>
                  <div className="px-6 py-8">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                      <div className="flex items-center mb-3">
                        <MicrophoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Voice Dictation</span>
                      </div>
                      <p className="text-gray-600 italic text-sm">
                        "CT scan of the chest shows no evidence of pulmonary embolism. 
                        Normal heart size. No pleural effusion. No pneumothorax. 
                        Small non-calcified nodule in right lower lobe measuring 4mm."
                      </p>
                    </div>
                    
                    <div className="flex justify-center my-4">
                      <BoltIcon className="h-8 w-8 text-yellow-500 animate-pulse" />
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center mb-3">
                        <DocumentTextIcon className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Generated Report</span>
                      </div>
                      <div className="space-y-3 text-sm text-gray-600">
                        <p className="font-medium">FINDINGS:</p>
                        <p>
                          <span className="font-medium">Pulmonary Arteries:</span> No evidence of pulmonary embolism.
                        </p>
                        <p>
                          <span className="font-medium">Cardiac:</span> Normal heart size.
                        </p>
                        <p>
                          <span className="font-medium">Pleura:</span> No pleural effusion. No pneumothorax.
                        </p>
                        <p>
                          <span className="font-medium">Lungs:</span> Small non-calcified nodule in right lower lobe measuring 4mm.
                        </p>
                        <p className="font-medium mt-4">IMPRESSION:</p>
                        <p>1. No evidence of pulmonary embolism.</p>
                        <p>2. 4mm non-calcified nodule in right lower lobe. Follow-up CT in 12 months is recommended.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Smart Reporting
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                AI turns your dictation into clear, structured reports.
              </p>
              
              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <MicrophoneIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Speak Naturally</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Just speak—our AI gets it.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Clear Reports</h4>
                    <p className="mt-2 text-base text-gray-500">
                      AI organizes your findings into clear reports.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <ClockIcon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Faster Reporting</h4>
                    <p className="mt-2 text-base text-gray-500">
                      Cut reporting time by 70% with consistent accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 