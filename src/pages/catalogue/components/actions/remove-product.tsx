import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CircleAlertIcon, Loader, TrashIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { removeProduct } from '@/api/products/products-service'
import { Product } from '@/api/products/products-types'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface RemoveProductProps {
  product: Product
}

export const RemoveProduct = ({ product }: RemoveProductProps) => {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const removeProductMutation = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      toast.success(`Product ${product.title} removed successfully`)
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleRemoveProduct = () => {
    removeProductMutation.mutate(product.id)
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={setOpen}
    >
      <AlertDialogTrigger asChild>
        <Button
          variant='destructive'
          size='icon'
        >
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className='flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4'>
          <div
            className='flex size-9 shrink-0 items-center justify-center rounded-full border'
            aria-hidden='true'
          >
            <CircleAlertIcon className='size-4 opacity-80' />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {product.title}? All product data will
              be removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRemoveProduct}>
            {removeProductMutation.isPending ? (
              <Loader className='animate-spin' />
            ) : (
              'Remove'
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

