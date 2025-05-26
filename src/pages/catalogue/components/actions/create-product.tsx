import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getCategories } from '@/api/categories/categories-service'
import { createProduct } from '@/api/products/products-service'
import { Category } from '@/api/products/products-types'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import { UrlInput } from '@/components/ui/url-input'

const createProductSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  price: z.coerce.number().min(1, { message: 'Price is required' }),
  description: z
    .string()
    .min(1, { message: 'Description is required' })
    .max(100, { message: 'Description is too long' }),
  categoryId: z.string().min(1, { message: 'Category is required' }),
  images: z.string().min(1, { message: 'Image is required' }).url({
    message: 'Invalid image url'
  })
})

type CreateProductValues = z.infer<typeof createProductSchema>

export const CreateProduct = () => {
  const [open, setOpen] = useState(false)

  const form = useForm({
    defaultValues: {
      title: ''
    },
    resolver: zodResolver(createProductSchema)
  })

  const queryClient = useQueryClient()

  const createProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      toast.success(`Product ${data.title} created successfully`)
      setOpen(false)
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })

  const handleProductCreate = (form: CreateProductValues) => {
    createProductMutation.mutate({
      ...form,
      categoryId: +form.categoryId,
      images: [form.images]
    })
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>Create product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new product</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleProductCreate)}
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
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Nice and shiny'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='categoryId'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <CategorySelect
                      category={field.value}
                      setCategory={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='images'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <UrlInput
                      value={field.value}
                      onChange={field.onChange}
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
              {createProductMutation.isPending ? (
                <Loader className='animate-spin' />
              ) : (
                'Create'
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

interface CategorySelectProps {
  category: string
  setCategory: (value: string) => void
}

const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories
  })

  if (isLoading) return <Skeleton className='h-9 w-full' />

  return (
    <Select
      value={category}
      onValueChange={setCategory}
    >
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='Select category' />
      </SelectTrigger>
      <SelectContent>
        {categories?.map((item) => (
          <SelectItem
            key={item.id}
            value={item.id.toString()}
          >
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

