import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | CHRONOS';
  }, []);
  return <div className="min-h-screen bg-gray-950 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gold-500 mb-8">
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-gray-300 mb-6">
                Last updated: December 1, 2023
              </p>
              <p className="text-gray-300">
                At CHRONOS, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or make a purchase.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>
                    Personal identification information (name, email address,
                    phone number)
                  </li>
                  <li>Billing and shipping information</li>
                  <li>
                    Payment details (processed securely through our payment
                    providers)
                  </li>
                  <li>Account preferences and settings</li>
                  <li>Purchase history and product interactions</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We use the collected information for various purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your purchases</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Protect against fraudulent transactions</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
              <p className="text-gray-300">
                We use cookies and similar tracking technologies to enhance your
                browsing experience. These tools help us understand how you
                interact with our website and allow us to provide personalized
                content and advertisements.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your
                personal information. However, please note that no method of
                transmission over the internet is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please
                contact us at:{' '}
                <a href="mailto:privacy@chronos.com" className="text-gold-500 hover:text-gold-400">
                  privacy@chronos.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>;
};
export default Privacy;