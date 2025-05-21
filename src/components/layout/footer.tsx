export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='mt-[var(--layout-y-offset)] h-[var(--footer-height)] border-t'>
      <div className='container flex h-full items-center justify-center'>
        <span className='text-muted-foreground'>© {year} SmartSupply</span>
      </div>
    </footer>
  )
}

