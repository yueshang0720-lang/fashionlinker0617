import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredArticles = [
    {
      slug: 'best-rain-boots',
      title: '10 Best Rain Boots for Style and Function',
      description: 'Discover the top waterproof boots that combine practicality with fashionable design for rainy days.',
      category: 'Fashion',
      image: 'https://images.pexels.com/photos/1895019/pexels-photo-1895019.jpeg',
    },
    {
      slug: 'best-wireless-headphones',
      title: '10 Best Wireless Headphones for 2024',
      description: 'Discover the top wireless headphones that deliver exceptional sound quality and comfort.',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg',
    },
    {
      slug: 'best-coffee-makers',
      title: '10 Best Coffee Makers for Home Brewing',
      description: 'From espresso machines to drip coffee makers, find your perfect morning companion.',
      category: 'Kitchen',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg',
    },
    {
      slug: 'best-running-shoes',
      title: '10 Best Running Shoes for Athletes',
      description: 'Performance-tested running shoes that provide comfort and support for every stride.',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    },
    {
      slug: 'best-skincare-products',
      title: '10 Best Skincare Products for Glowing Skin',
      description: 'Premium skincare essentials that deliver visible results for all skin types.',
      category: 'Beauty',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg',
    },
    {
      slug: 'best-smart-watches',
      title: '10 Best Smart Watches for Fitness Tracking',
      description: 'Track your health and stay connected with these advanced smartwatches.',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Trusted Product Reviews
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Best Products</span> for Your Lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert-curated reviews and comprehensive comparisons to help you make confident purchasing decisions.
              Find top-rated products across all categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Explore Reviews
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Reviews</h3>
              <p className="text-gray-600">In-depth analysis from industry professionals</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-4">
                <TrendingUp className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Trends</h3>
              <p className="text-gray-600">Stay updated with newest product releases</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Quality</h3>
              <p className="text-gray-600">Only the best products make our lists</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Product Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of top-rated products across various categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link href={`/blog/${article.slug}`} key={article.slug}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span>Expert Reviewed</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Product?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Browse our comprehensive guides and discover products that match your needs and preferences
          </p>
          <Link href="/blog">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
