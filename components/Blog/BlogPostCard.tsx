type Props = {
  title: string
  summary: string
  className?: string
  featured?: boolean
}

export const BlogPostCard: React.FC<Props> = ({
  title,
  summary,
  featured,
  className,
}) => {
  return (
    <div
      className={`h-full rounded-sm bg-primaryDark bg-opacity-10 ${className} ${
        !featured && 'md:col-span-5'
      }`}>
      {featured && (
        <div className='h-52'>
          <img
            src='/images/project.jpg'
            className='object-cover w-full h-full rounded-sm'
            alt=''
          />
        </div>
      )}
      <div className='px-3 py-5'>
        <p className='text-sm text-white text-opacity-90'>
          21 Mar, 2021 | 10 min read
        </p>
        <h1 className='mb-2 text-3xl font-bold'>{title}</h1>
        <p className='mb-3 opacity-95 line-clamp-2'>{summary}</p>
      </div>
    </div>
  )
}
