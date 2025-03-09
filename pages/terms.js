import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Head>
        <title>Terms of Service | InnovationDX</title>
        <meta name="description" content="Terms of Service for InnovationDX PACS solutions and services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <div className="container mx-auto p-4 space-y-6 max-w-4xl py-12">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold">Terms of Service for InnovationDX PACS</h2>
            </div>
            <div className="p-6 prose dark:prose-invert max-w-none space-y-4">
              <p>
                By accessing or using InnovationDX&apos;s PACS services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
              </p>

              <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our services, you agree to these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
              </p>

              <h2 className="text-xl font-semibold mt-6">2. Service Description</h2>
              <p>
                InnovationDX PACS is a medical imaging management system that provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Medical image storage and retrieval</li>
                <li>Image viewing and manipulation tools</li>
                <li>Report generation and management</li>
                <li>Secure sharing capabilities</li>
                <li>Integration with healthcare systems</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">3. User Responsibilities</h2>
              <p>Users of our services must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain the confidentiality of their account credentials</li>
                <li>Ensure accuracy of uploaded patient information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Report any security concerns or unauthorized access</li>
                <li>Use the service only for legitimate medical purposes</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">4. HIPAA Compliance</h2>
              <p>
                Users must comply with HIPAA regulations when using our services. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Protecting patient privacy and confidentiality</li>
                <li>Using appropriate security measures</li>
                <li>Reporting any potential breaches</li>
                <li>Maintaining required documentation</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">5. Data Storage and Security</h2>
              <p>
                We implement industry-standard security measures, but users are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining secure passwords</li>
                <li>Ensuring proper access controls</li>
                <li>Following security best practices</li>
                <li>Reporting security incidents promptly</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">6. Service Availability</h2>
              <p>
                While we strive for maximum uptime, we do not guarantee uninterrupted service. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Perform maintenance and updates</li>
                <li>Modify or discontinue features</li>
                <li>Address technical issues</li>
                <li>Implement security measures</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">7. Intellectual Property</h2>
              <p>
                All content and software provided as part of our services are protected by intellectual property rights. Users may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy or modify the software</li>
                <li>Reverse engineer the system</li>
                <li>Remove copyright notices</li>
                <li>Use our trademarks without permission</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violation of these terms</li>
                <li>Non-payment of fees</li>
                <li>Illegal or unauthorized use</li>
                <li>Security concerns</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">9. Limitation of Liability</h2>
              <p>
                To the extent permitted by law, InnovationDX shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service interruptions</li>
                <li>Data loss or corruption</li>
                <li>Indirect or consequential damages</li>
                <li>Third-party actions or content</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6">10. Changes to Terms</h2>
              <p>
                We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>

              <h2 className="text-xl font-semibold mt-6">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact:
              </p>
              <div className="mt-4 space-y-2">
                <p>InnovationDX, Inc.</p>
                <p>Email: support@innovationdx.com</p>
              </div>

              <div className="mt-8 p-4 rounded-lg">
                <p className="text-sm">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 