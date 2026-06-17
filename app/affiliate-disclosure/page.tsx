import { Metadata } from 'next';
import { AlertCircle, DollarSign, Shield, ThumbsUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | FashionLinker',
  description: 'Learn about our affiliate relationships and how we earn commissions while maintaining editorial independence.',
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Affiliate Disclosure
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            Last Updated: December 29, 2025
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Important Notice</h2>
                <p className="text-gray-700 leading-relaxed">
                  FashionLinker participates in affiliate marketing programs. This means we may earn
                  commissions from purchases made through links on our website. This disclosure is made
                  in accordance with the Federal Trade Commission's requirements on endorsements and
                  testimonials.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Links?</h2>
              <p className="text-gray-600 leading-relaxed">
                Affiliate links are special URLs that contain a unique tracking code. When you click on
                an affiliate link and make a purchase from the retailer's website, we may receive a
                commission from that sale. This commission comes at no additional cost to you—the price
                you pay remains the same whether you use our affiliate link or visit the retailer directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Affiliate Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We include affiliate links throughout our website, particularly in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Product review articles and "best of" lists</li>
                <li>Product comparison guides</li>
                <li>Buying guides and recommendations</li>
                <li>Individual product features and highlights</li>
              </ul>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                  <ThumbsUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Commitment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We only recommend products we believe will genuinely benefit our readers. Our reviews
                  are based on thorough research and real-world considerations.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Editorial Independence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Affiliate relationships never influence our editorial decisions. We maintain complete
                  independence in our product selections and recommendations.
                </p>
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Programs We Participate In</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                FashionLinker is a participant in various affiliate programs, which may include but are
                not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Amazon Associates Program</li>
                <li>ShareASale</li>
                <li>CJ Affiliate (Commission Junction)</li>
                <li>Impact Radius</li>
                <li>Rakuten Advertising</li>
                <li>Individual brand affiliate programs</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                These programs allow us to earn advertising fees by linking to participating retailers
                and brands.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Commissions Work</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you click on an affiliate link and make a purchase:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-3">
                <li>
                  <strong className="text-gray-900">You click the link:</strong> The affiliate link
                  redirects you to the retailer's website and places a cookie in your browser.
                </li>
                <li>
                  <strong className="text-gray-900">You make a purchase:</strong> If you complete a
                  purchase within the cookie's validity period (typically 24-90 days), we may earn a
                  commission.
                </li>
                <li>
                  <strong className="text-gray-900">Commission is paid:</strong> The retailer pays us
                  a small percentage of the sale as a referral fee.
                </li>
                <li>
                  <strong className="text-gray-900">No extra cost to you:</strong> The product price
                  remains exactly the same—you don't pay anything extra.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Review Standards</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We maintain strict standards for all content on FashionLinker:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong className="text-gray-900">Honest opinions:</strong> We provide honest,
                  unbiased opinions based on thorough research and analysis.
                </li>
                <li>
                  <strong className="text-gray-900">Quality over commission:</strong> We never recommend
                  a product solely because it offers a higher commission.
                </li>
                <li>
                  <strong className="text-gray-900">Regular updates:</strong> We regularly review and
                  update our content to ensure it remains accurate and relevant.
                </li>
                <li>
                  <strong className="text-gray-900">Diverse sources:</strong> Our recommendations are
                  based on multiple sources, including expert reviews, customer feedback, and detailed
                  specifications.
                </li>
                <li>
                  <strong className="text-gray-900">Transparency:</strong> We clearly distinguish between
                  editorial content and promotional material.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Price and Availability Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                Please note that product prices, availability, and features are subject to change. While
                we strive to keep our information up-to-date, we cannot guarantee that the prices and
                details shown on our website match those currently available from retailers. Always check
                the retailer's website for the most current information before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Support Helps Us</h2>
              <p className="text-gray-600 leading-relaxed">
                When you make a purchase through our affiliate links, you're helping support FashionLinker
                at no extra cost to yourself. The commissions we earn allow us to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Continue providing free, high-quality content</li>
                <li>Research and review more products</li>
                <li>Maintain and improve our website</li>
                <li>Keep our articles updated with the latest information</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We genuinely appreciate your support and trust in our recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our affiliate relationships or how we operate, please
                don't hesitate to contact us at: contact@fashionlinker.top
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We're committed to transparency and are happy to address any concerns you may have about
                our content or business practices.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
