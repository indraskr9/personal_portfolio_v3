export const BlogLayout: React.FC = ({children}) => {
  return (
    <main className='flex flex-col items-center w-11/12 min-h-screen mx-auto my-5 lg:w-full md:max-w-4xl lg:max-w-5xl md:container'>
      {children}
    </main>
  )
}
