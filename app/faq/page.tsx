import { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | FashionLinker',
  description: 'Find answers to common questions about FashionLinker product reviews and recommendations.',
};

export default function FAQPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Find answers to common questions about our product reviews and recommendations
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What is FashionLinker?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                FashionLinker is a comprehensive product review and recommendation platform that helps
                consumers make informed purchasing decisions. We provide expert-curated lists of the best
                products across various lifestyle categories, complete with detailed reviews, comparisons,
                and buying guides.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How do you choose which products to review?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Our selection process is thorough and data-driven. We consider factors including customer
                reviews, expert opinions, product specifications, brand reputation, and value for money.
                We prioritize products that consistently receive positive feedback and demonstrate real
                quality and performance in their categories.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Are your reviews biased?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We maintain strict editorial independence. While we participate in affiliate programs,
                our recommendations are based solely on product merit, quality, and value. We never accept
                payment to feature or favorably review products. Our goal is to provide honest, unbiased
                information that helps you make the best choice for your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How often do you update your product recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We regularly monitor market trends, new product releases, and price changes to keep our
                content current. Most articles are reviewed and updated at least quarterly, or more
                frequently if significant changes occur in the product landscape. Each article includes
                a last-updated date for transparency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Do you test products yourself?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                When possible, our team conducts hands-on testing of products. However, we also rely on
                extensive research, including analysis of customer reviews, expert opinions from trusted
                sources, and detailed specification comparisons. This comprehensive approach ensures we
                can cover a wide range of products while maintaining quality standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What does it mean when you have affiliate links?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                When you click on certain links in our articles and make a purchase, we may earn a small
                commission at no additional cost to you. This helps support our website and allows us to
                continue providing free, high-quality content. Importantly, affiliate partnerships never
                influence our editorial decisions or product recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can I suggest products for review?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Absolutely! We welcome product suggestions from our readers. If there's a product or
                category you'd like us to review, please reach out through our contact form. While we
                can't guarantee we'll review every suggestion, we carefully consider all feedback when
                planning our content.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How can I trust your recommendations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Our recommendations are based on rigorous research, real-world testing when possible,
                and analysis of thousands of customer reviews. We have no allegiance to any particular
                brand or retailer. Our reputation depends on providing accurate, helpful information,
                and we take that responsibility seriously. We also encourage you to read multiple sources
                and reviews before making any purchase decision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What if I have a problem with a product I purchased?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                Since we don't sell products directly, you'll need to contact the retailer or manufacturer
                where you made your purchase for support with returns, warranties, or product issues.
                However, if you have concerns about information in our reviews, please contact us so we
                can investigate and update our content if necessary.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How can I stay updated with new content?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                We regularly publish new articles and updates to existing content. You can bookmark our
                blog page to check for new articles, or follow us on social media where we announce new
                content and special deals. We're constantly expanding our coverage to help you discover
                the best products across all categories.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? We're here to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
