export const BlogLayout: React.FC = ({children}) => {
  return (
    <main className='flex flex-col items-center min-h-screen mx-auto md:container'>
      {children}
    </main>
  )
}
