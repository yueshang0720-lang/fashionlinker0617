import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FashionLinker',
  description: 'Read our terms of service to understand the rules and regulations for using FashionLinker.',
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last Updated: December 29, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using FashionLinker ("the Website"), you agree to be bound by these Terms
                of Service ("Terms"). If you disagree with any part of these terms, you may not access the
                Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Website</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may use the Website for lawful purposes only. You agree not to use the Website:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>In any way that violates applicable laws or regulations</li>
                <li>To transmit any harmful or malicious code</li>
                <li>To interfere with or disrupt the Website or servers</li>
                <li>To impersonate any person or entity</li>
                <li>To harvest or collect information about other users</li>
                <li>For any commercial purpose without our express written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Website and its entire contents, features, and functionality (including but not limited
                to all information, software, text, displays, images, video, and audio) are owned by
                FashionLinker, its licensors, or other providers of such material and are protected by
                copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display,
                publicly perform, republish, download, store, or transmit any of the material on our Website
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Reviews and Recommendations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The product reviews, recommendations, and information provided on the Website are for
                general informational purposes only. While we strive to provide accurate and up-to-date
                information, we make no representations or warranties of any kind about:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The completeness, accuracy, reliability, or suitability of the information</li>
                <li>The availability or performance of products reviewed</li>
                <li>The current pricing of products (prices may change)</li>
                <li>The quality or satisfaction you may experience with any product</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Relationships</h2>
              <p className="text-gray-600 leading-relaxed">
                FashionLinker participates in various affiliate marketing programs. This means we may earn
                commissions from qualifying purchases made through links on our Website. Our affiliate
                relationships do not influence our editorial content or product recommendations. For more
                details, please see our Affiliate Disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                The Website may contain links to third-party websites or services that are not owned or
                controlled by FashionLinker. We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party websites or services. You
                acknowledge and agree that FashionLinker shall not be liable for any damage or loss caused
                by your use of any third-party content, goods, or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, FASHIONLINKER
                DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, reliability, or availability of the Website</li>
                <li>Errors or omissions in content</li>
                <li>Security of the Website or your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FASHIONLINKER SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES,
                WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE
                WEBSITE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless FashionLinker and its affiliates, officers,
                directors, employees, and agents from and against any claims, liabilities, damages, judgments,
                awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out
                of or relating to your violation of these Terms or your use of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to the Website</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue the Website (or any part thereof)
                at any time, with or without notice. We shall not be liable to you or any third party for
                any modification, suspension, or discontinuance of the Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may revise and update these Terms from time to time at our sole discretion. All changes
                are effective immediately when posted and apply to all access to and use of the Website
                thereafter. Your continued use of the Website following the posting of revised Terms means
                you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws, without
                regard to its conflict of law provisions. Any legal action or proceeding arising under these
                Terms shall be brought exclusively in the appropriate courts, and you consent to personal
                jurisdiction in such courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms, please contact us at: contact@fashionlinker.top
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
