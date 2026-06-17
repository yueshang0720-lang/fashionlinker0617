import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FashionLinker',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last Updated: December 29, 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At FashionLinker ("we," "us," or "our"), we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website fashionlinker.top.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Fill out contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Leave comments on our blog posts</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                This information may include your name, email address, and any other information you
                choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device,
                including information about your web browser, IP address, time zone, and some of the cookies
                installed on your device. We also collect information about your browsing behavior, such as
                pages viewed and links clicked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing, operating, and maintaining our website</li>
                <li>Improving and personalizing your experience</li>
                <li>Understanding and analyzing how you use our website</li>
                <li>Developing new features and functionality</li>
                <li>Communicating with you for customer service and support</li>
                <li>Sending you marketing and promotional communications (with your consent)</li>
                <li>Detecting and preventing fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store
                certain information. Cookies are small data files stored on your device. You can instruct
                your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent cookies
                (which remain on your device until deleted or expire).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party service providers to help us operate our website and administer
                activities on our behalf. These third parties may have access to your personal information
                only to perform specific tasks and are obligated not to disclose or use it for other purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Third-party services we use may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Analytics services (e.g., Google Analytics)</li>
                <li>Advertising networks</li>
                <li>Affiliate program platforms</li>
                <li>Email service providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website contains affiliate links to third-party websites. When you click on these links
                and make a purchase, we may receive a commission. These third-party sites have their own
                privacy policies, and we have no responsibility or liability for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However,
                no method of transmission over the internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to our processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or
                for other operational, legal, or regulatory reasons. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact
                us at: contact@fashionlinker.top
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
