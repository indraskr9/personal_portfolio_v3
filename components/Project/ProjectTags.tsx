export const ProjectTags = ({items}: {items: string[]}) => {
  return (
    <>
      {items.map(item => (
        <p
          key={item}
          className='mr-2 mb-2 bg-primaryDark bg-opacity-25 text-primary px-3 py-1 rounded-full text-sm'>
          {item}
        </p>
      ))}
    </>
  )
}
