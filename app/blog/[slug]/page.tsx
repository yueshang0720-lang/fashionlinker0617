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
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | FashionLinker`,
    description: post.description,
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
      description: `High-quality ${category.toLowerCase()} with excellent features.`,
      features: ['Advanced tech', 'Premium materials'],
      pros: ['Great quality'],
      cons: ['Premium price'],
    });
  }
  return products;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContents[params.slug];
  const products = content?.products || (content?.content ? [] : generateProducts(post.category));
  const introduction = content?.introduction;
  const buyingGuide = content?.buyingGuide;
  const conclusion = content?.conclusion;
  const rawContent = content?.content;

  return (
    <article className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
          </Link>

          <header className="mb-12">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.description}</p>
          </header>

          {/* 如果有自定义 HTML 内容则渲染 */}
          {rawContent ? (
            <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: rawContent }} />
          ) : (
            <div className="prose prose-lg max-w-none mb-12">
               <p>{introduction}</p>
            </div>
          )}

          {/* 安全的产品列表渲染 */}
          {products && products.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Our Top 10 Picks</h2>
              <div className="space-y-8">
                {products.map((product) => (
                  <Card key={product.rank} className="overflow-hidden">
                    <CardHeader className="bg-blue-50">
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-4">{product.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-green-600"/>Features</h4>
                          <ul className="text-sm">{product.features?.map((f, i) => <li key={i}>{f}</li>)}</ul>
                        </div>
                        <div>
                          <h4 className="font-semibold">Pros</h4>
                          <ul className="text-sm text-green-700">{product.pros?.map((p, i) => <li key={i}>✓ {p}</li>)}</ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* 购买指南与总结 */}
          {buyingGuide && (
             <div className="prose max-w-none mb-12">
               <h2>{buyingGuide.title}</h2>
               {buyingGuide.factors.map((f, i) => <div key={i}><h3>{f.title}</h3><p>{f.description}</p></div>)}
             </div>
          )}
          
          <div className="prose max-w-none">
            <h2>Conclusion</h2>
            <p>{conclusion}</p>
          </div>
        </div>
      </div>
    </article>
  );
}