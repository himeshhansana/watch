import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service | CHRONOS';
  }, []);
  return <div className="min-h-screen bg-gray-950 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gold-500 mb-8">
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <p className="text-gray-300 mb-6">
                Last updated: December 1, 2023
              </p>
              <p className="text-gray-300">
                Please read these Terms of Service carefully before using the
                CHRONOS website or making a purchase. By accessing or using our
                website, you agree to be bound by these terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Account Terms</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  When creating an account, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Product Information</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  We strive to provide accurate product descriptions and
                  pricing. However:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Product images are for illustration purposes only</li>
                  <li>We reserve the right to modify prices without notice</li>
                  <li>Product availability is not guaranteed</li>
                  <li>Specifications may vary by region</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Ordering and Payment</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  By placing an order, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide valid payment information</li>
                  <li>Pay all charges at the prices in effect</li>
                  <li>Pay applicable taxes and shipping fees</li>
                  <li>Accept our order confirmation process</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Shipping and Returns</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Our shipping and returns policy includes:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>30-day return policy for unworn items</li>
                  <li>Original packaging and documentation required</li>
                  <li>Free shipping on orders over $500</li>
                  <li>International shipping available to select countries</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Warranty Information</h2>
              <p className="text-gray-300">
                All CHRONOS watches come with a 2-year international warranty
                covering manufacturing defects. This warranty is subject to
                proper care and maintenance of the timepiece.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300">
                All content on this website, including text, images, logos, and
                designs, is the property of CHRONOS and is protected by
                intellectual property laws. Any unauthorized use is strictly
                prohibited.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-300">
                CHRONOS shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of our services or products.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time.
                Continued use of our website following any changes constitutes
                acceptance of the modified terms.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300">
                For questions about these Terms of Service, please contact us
                at:{' '}
                <a href="mailto:legal@chronos.com" className="text-gold-500 hover:text-gold-400">
                  legal@chronos.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>;
};
export default Terms;