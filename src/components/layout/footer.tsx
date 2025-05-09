export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-20 h-20 border-t'>
      <div className='container flex h-full items-center justify-center'>
        <span className='text-muted-foreground'>© {year} SmartSupply</span>
      </div>
    </footer>
  )
}

