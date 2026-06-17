import { Metadata } from 'next';
import { Award, Target, Users, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - FashionLinker',
  description: 'Learn about FashionLinker, your trusted source for expert product reviews and buying guides.',
};

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About FashionLinker
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Your trusted partner in discovering the best products for your lifestyle
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At FashionLinker, we believe that making informed purchasing decisions shouldn't be overwhelming.
              Our mission is to simplify your shopping experience by providing comprehensive, unbiased reviews
              and comparisons of the best products across various lifestyle categories.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that every purchase matters, whether it's a daily essential or a special investment.
              That's why we dedicate ourselves to researching, testing, and curating only the highest quality
              products that meet real-world needs and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of experienced reviewers thoroughly tests and evaluates each product
                to provide you with honest, detailed insights.
              </p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                <Target className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unbiased Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain editorial independence and only recommend products that truly
                deserve your attention and investment.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We listen to our readers' feedback and continuously update our content
                to address your needs and questions.
              </p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                <Heart className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product featured on our site undergoes rigorous evaluation to ensure
                it meets our high standards for quality and value.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our review process is comprehensive and transparent. We research extensively, comparing features,
              prices, and user feedback across multiple sources. When possible, we conduct hands-on testing to
              provide real-world insights that you can trust.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We regularly update our articles to reflect new product releases, price changes, and evolving
              market trends, ensuring you always have access to the most current information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-12">Why Trust Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              FashionLinker is built on a foundation of integrity and expertise. As a participant in various
              affiliate programs, we may earn commissions from qualifying purchases made through our links.
              However, this never influences our editorial decisions or product recommendations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our commitment is to you, our reader. We only recommend products we believe will genuinely
              benefit you, and we're transparent about how we operate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
