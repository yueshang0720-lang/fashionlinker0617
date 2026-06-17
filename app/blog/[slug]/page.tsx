import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, ExternalLink, CircleCheck as CheckCircle2, Circle as XCircle } from 'lucide-react';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { blogContents } from '@/lib/blog-content';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | FashionLinker`,
    description: post.description,
    keywords: `${post.category}, product reviews, best products, buying guide, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

interface Product {
  rank: number;
  name: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  link?: string;
}

function generateProducts(category: string): Product[] {
  const products: Product[] = [];

  for (let i = 1; i <= 10; i++) {
    products.push({
      rank: i,
      name: `Premium ${category} Model ${i}`,
      description: `High-quality ${category.toLowerCase()} with excellent features and performance that meets the needs of discerning customers.`,
      features: [
        'Advanced technology integration',
        'Premium materials and construction',
        'Ergonomic design for comfort',
        'Long-lasting durability',
      ],
      pros: [
        'Excellent build quality',
        'Great value for money',
        'User-friendly features',
      ],
      cons: [
        'Premium price point',
        'May require setup time',
      ],
    });
  }

  return products;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const content = blogContents[params.slug];
  const products = content ? content.products : generateProducts(post.category);
  const introduction = content?.introduction;
  const buyingGuide = content?.buyingGuide;
  const conclusion = content?.conclusion;

  return (
    <article className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </header>

          <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {introduction ? (
              <p className="text-gray-700 leading-relaxed">{introduction}</p>
            ) : (
              <>
                <p className="text-gray-700 leading-relaxed">
                  Finding the perfect {post.category.toLowerCase()} products can be challenging with so many options available.
                  We've done the research for you, testing and evaluating the top products in this category to bring you
                  this comprehensive guide. Whether you're a beginner or experienced user, our expert recommendations will
                  help you make an informed decision.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Each product in our list has been carefully selected based on quality, performance, value, and user
                  satisfaction. We consider real-world testing, customer reviews, expert opinions, and detailed specifications
                  to ensure our recommendations meet the highest standards.
                </p>
              </>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {params.slug === 'crunchyroll-ultimate-anime-streaming' ? 'Top 10 Features & Benefits' : params.slug === 'vilebrequin-luxury-swimwear-summer-guide' ? 'Top 10 Collections & Highlights' : 'Our Top 10 Picks'}
            </h2>
            <div className="space-y-8">
              {products.map((product) => (
                <Card key={product.rank} id={`product-${product.rank}`} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="default" className="text-lg px-3 py-1">
                            #{product.rank}
                          </Badge>
                          <CardTitle className="text-2xl">{product.name}</CardTitle>
                        </div>
                        <p className="text-gray-600 mt-2">{product.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-600 text-sm flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                            Pros
                          </h4>
                          <ul className="space-y-1">
                            {product.pros.map((pro, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start">
                                <span className="text-green-600 mr-2">✓</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <XCircle className="h-5 w-5 text-gray-400 mr-2" />
                            Cons
                          </h4>
                          <ul className="space-y-1">
                            {product.cons.map((con, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start">
                                <span className="text-gray-400 mr-2">✗</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {product.link && product.link !== '#' && (
                      <a href={product.link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                          {params.slug === 'crunchyroll-ultimate-anime-streaming' ? 'Learn More' : params.slug === 'vilebrequin-luxury-swimwear-summer-guide' ? 'Shop Vilebrequin' : 'Check Price'}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {(!product.link || product.link === '#') && (
                      <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                        Check Price
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            {buyingGuide ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{buyingGuide.title}</h2>
                {buyingGuide.factors.map((factor, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{factor.description}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Guide</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When shopping for {post.category.toLowerCase()} products, it's important to consider several key factors
                  to ensure you make the right choice for your needs and budget.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality and Durability</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Look for products made with high-quality materials that will stand the test of time. Check customer
                  reviews for insights into long-term durability and performance.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Features and Functionality</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Consider which features are essential for your use case. While more features can be appealing, focus
                  on functionality that you'll actually use regularly.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Value for Money</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Price isn't everything, but you want to ensure you're getting good value. Compare features and quality
                  across different price points to find the sweet spot for your budget.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Reputation</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Established brands often provide better customer service, warranties, and product support. However,
                  don't overlook newer brands that may offer innovative features at competitive prices.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Real user experiences provide valuable insights into product performance, quality, and potential issues.
                  Look for patterns in reviews rather than focusing on individual opinions.
                </p>
              </>
            )}
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
            {conclusion ? (
              <p className="text-gray-700 leading-relaxed mb-6">{conclusion}</p>
            ) : (
              <>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Choosing the right {post.category.toLowerCase()} product doesn't have to be overwhelming. Our carefully
                  curated list of the top 10 options provides excellent choices for different needs and budgets. Each
                  product offers unique advantages, so consider your specific requirements when making your decision.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Remember to read customer reviews, compare prices across retailers, and take advantage of return policies
                  if the product doesn't meet your expectations. With the right information and our expert recommendations,
                  you're well-equipped to make a confident purchasing decision.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Have questions about any of these products? Feel free to reach out through our contact page. We're here
                  to help you find the perfect {post.category.toLowerCase()} solution for your needs.
                </p>
              </>
            )}
          </div>

          {params.slug === 'crunchyroll-ultimate-anime-streaming' && (
            <div className="mb-12 flex justify-center">
              <a
                href="https://app.partnermatic.com/track/6ee2nMfeeWpQ4iLtOHwiGVyasuPpSZZ93fDZoP_bpEQr6JurKsyutlxdCKHpm7gqkHPQv4SZSo_a42_aICRcGxEZYBzMQt1S6HXHdPVfWop7w_c_c?url=https%3A%2F%2Fwww.crunchyroll.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-12 py-6 text-lg shadow-lg">
                  Start Your Anime Journey Now
                  <ExternalLink className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          )}

          {params.slug === 'vilebrequin-luxury-swimwear-summer-guide' && (
            <div className="mb-12 flex justify-center">
              <a
                href="https://www.linkhaitao.com/index.php?mod=lhdeal&track=5f5f_bzeM0jQroDesDsx_aKqB5hgSdyILglKDbNsqzbVRocShCgOAqBYlKzO1_arMzDEZ9jPQbaB_ak_c&new=https%3A%2F%2Fwww.vilebrequin.com%2Fus%2Fen%2Fhome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-sky-500 to-teal-600 hover:from-sky-600 hover:to-teal-700 text-white font-bold px-12 py-6 text-lg shadow-lg">
                  Shop Vilebrequin Summer Collection
                  <ExternalLink className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
          )}

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Affiliate Disclosure</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              This article contains affiliate links. If you click through and make a purchase, we may earn a small
              commission at no additional cost to you. This helps support our website and allows us to continue
              providing quality content. Our recommendations are based solely on product merit and are not influenced
              by affiliate relationships.
            </p>
          </div>

          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
