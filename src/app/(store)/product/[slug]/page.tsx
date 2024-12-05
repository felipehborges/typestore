import { AddToCartButton } from '@/components/add-to-cart-button'
import { Button } from '@/components/ui/button'
import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { Heart, ShoppingCart } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'

interface ProductProps {
  params: {
    slug: string
  }
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60
    }
  })
  const product = await response.json()
  return product
}

export async function generateMetadata({
  params
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title
  }
}

// This function below is used to generate the static paths for the page.
// It's used to tell Next.js which pages should be generated statically (cache).
export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  // return [{ slug: '' }]
  return products.map((product) => ({ slug: product.slug }))
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          className="place-self-center rounded-lg"
          src={product.image}
          alt=""
          width={800}
          height={800}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="font-bold text-3xl leading-tight">{product.title}</h1>

        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>

        <div className="mt-10 flex flex-col justify-start gap-1">
          <div className="flex items-end gap-1">
            <span className="font-semibold text-2xl">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </span>
            <p>no pix</p>
          </div>

          <p className="text-muted-foreground text-sm">
            ou em até <strong>12x</strong> sem juros de{' '}
            {(product.price / 12).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>

        <div className="mt-8 mb-4 space-y-2">
          <p className="block font-semibold">Tamanhos</p>

          <div className="flex gap-1">
            <Button
              className="rounded-full"
              variant="secondary"
              size="icon"
              type="button"
            >
              P
            </Button>
            <Button
              className="rounded-full"
              variant="secondary"
              size="icon"
              type="button"
            >
              M
            </Button>
            <Button
              className="rounded-full"
              variant="secondary"
              size="icon"
              type="button"
            >
              G
            </Button>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <AddToCartButton productId={product.id} />

          {/* <Button type="button" size="lg" variant="outline">
            <Heart />
            Adicionar aos favoritos
          </Button> */}
        </div>
      </div>
    </div>
  )
}
