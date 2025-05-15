import { LoginForm } from './components/login-form'

export const LoginPage = () => {
  return (
    <section className='flex h-[calc(100vh-var(--header-height)-var(--footer-height)-2*var(--layout-y-offset))] flex-col items-center justify-center'>
      <LoginForm />
    </section>
  )
}

