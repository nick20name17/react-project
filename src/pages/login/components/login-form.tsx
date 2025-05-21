import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { z } from 'zod'

import { login } from '@/api/auth/auth-service'
import { LoginPayload } from '@/api/auth/auth-types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { routes } from '@/config/routes'
import { useAuth } from '@/providers/auth-provider'

const loginSchema = z.object({
  email: z.string().email().min(1, { message: 'Email is required' }),
  password: z.string().min(1, { message: 'Password is required' })
})

export const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const { setIsAuth } = useAuth()

  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      navigate(routes.catalogue)
      toast.success('Login Successfuly!')
      setIsAuth(true)

      localStorage.setItem('accessToken', data.access_token)
      localStorage.setItem('refreshToken', data.refresh_token)
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const onSubmit = (data: LoginPayload) => {
    loginMutation.mutate(data)
  }

  return (
    <Card className='w-120'>
      <CardHeader className='text-center'>
        <CardTitle className='text-2xl'>Welcome to SmartSupply!</CardTitle>
        <CardDescription>Please login to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loginMutation.isPending}
                      type='email'
                      inputMode='email'
                      placeholder='example@example.com'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loginMutation.isPending}
                      type='password'
                      placeholder='•••••••••••'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={loginMutation.isPending}
              className='w-full'
              type='submit'
            >
              {loginMutation.isPending ? (
                <Loader className='animate-spin' />
              ) : (
                'Log In'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='justify-center'>
        <Link
          className='hover:text-primary text-center text-sm transition-colors'
          to={routes.home}
        >
          Back to Home
        </Link>
      </CardFooter>
    </Card>
  )
}

