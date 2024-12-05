'use client'

import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(props.productId)
  }

  return (
    <Button type="button" size="lg" onClick={handleAddProductToCart}>
      <ShoppingCart />
      Adicionar ao carrinho
    </Button>
  )
}
