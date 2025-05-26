import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Edit2, Loader } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { updateProduct } from '@/api/products/products-service'
import { Product } from '@/api/products/products-types'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PriceInput } from '@/components/ui/price-input'

const updateProductSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  price: z.coerce.number().min(1, { message: 'Price is required' })
})

type UpdateProductValues = z.infer<typeof updateProductSchema>

interface UpdateProductProps {
  product: Product
}
export const UpdateProduct = ({ product }: UpdateProductProps) => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      price: product.price,
      title: product.title
    },
    resolver: zodResolver(updateProductSchema)
  })

  const queryClient = useQueryClient()

  const updateProductMutation = useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateProductValues }) => {
      return updateProduct(id, payload)
    },
    onSuccess: (data) => {
      toast.success(`Product ${data.title} updated successfully`)
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleProductUpdate = (form: UpdateProductValues) => {
    updateProductMutation.mutate({
      id: product.id,
      payload: form
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button
          size='icon'
          variant='secondary'
        >
          <Edit2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update new product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleProductUpdate)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='New balance 530'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='price'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <PriceInput
                      min={0}
                      type='number'
                      placeholder='5.5'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className='w-full'
              type='submit'
            >
              {updateProductMutation.isPending ? (
                <Loader className='animate-spin' />
              ) : (
                'Update'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

