import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    // cache: 'force-cache'
    // force-cache: The browser loads the resource from the server and stores it in the cache (default).
    // cache: 'no-store'
    // no-store: The browser loads the resource from the server without storing it in the cache.
    next: {
      revalidate: 60 * 60
      // next. revalidate: 60 * 60: The browser loads the resource from the server and stores it in the cache.
      // After 60 minutes, the browser will revalidate the resource with the server.

      // To a YouTube type of website, it's interesting to use the no-store option, because the content is always changing.
      // Every F5, the content is different.
    }
  })
  const products = await response.json()
  return products
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[1300px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/products/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-muted dark:ring-0"
      >
        <Image
          src={highlightedProduct.image}
          alt=""
          className="place-self-center transition-transform duration-300 group-hover:scale-105"
          width={1200}
          height={100}
          quality={100}
        />

        <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-background ring-1 ring-muted dark:ring-0"
          >
            <Image
              src={product.image}
              alt=""
              className="place-self-center transition-transform duration-300 group-hover:scale-105"
              width={1000}
              height={1000}
              quality={100}
            />

            <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-muted bg-background p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-primary px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
