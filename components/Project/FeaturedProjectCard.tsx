import {ProjectTags} from 'components'
import {motion} from 'framer-motion'
import {ProjectCardAnimation} from './animation'
import styles from './styles/FeaturedProjectCard.module.css'

type Props = {
  image?: string
  title: string
  imageOnLeft?: boolean
}

export const FeaturedProjectCard: React.FC<Props> = ({
  image = 'project.jpg',
  title,
  imageOnLeft,
}) => {
  return (
    <motion.div
      variants={ProjectCardAnimation}
      className='flex flex-col md:flex-row p-2 md:p-5 rounded-md relative my-8 bg-gray bg-opacity-70 hover:shadow-xl transition-all duration-500 transform hover:scale-105'>
      <div
        className={`${styles.project_thumbnail} relative flex-1 md:${
          imageOnLeft && 'order-last'
        } order-first`}>
        <img
          className='rounded-sm object-cover w-full h-52 md:min-h-full'
          src={`/images/${image}`}
          alt='project thumbnail'
        />
      </div>

      <div className={`flex-1 p-3`}>
        <p
          className={`font-mono text-sm ml-1 mb-1 uppercase tracking-wider font-medium text-primary md:${
            imageOnLeft ? 'text-left' : 'text-right'
          }`}>
          Featured
        </p>
        <h1
          className={`text-4xl md:text-5xl font-semibold text-left md:${
            imageOnLeft ? 'text-left' : 'text-right'
          }`}>
          {title}
        </h1>
        <div className='bg-primary bg-opacity-10 p-5 rounded-sm my-3 relative transform min-w-full'>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis
            viverra quis hac gravida ut lacus lectus ut. Risus ipsum facilisis
            ut est eros ullamcorper. Morbi eleifend in posuere elit nam sed.
            Mattis suscipit ac.
          </p>
        </div>
        <div
          className={`flex my-5 justify-start md:${
            imageOnLeft ? 'justify-start' : 'justify-end'
          }`}>
          {<ProjectTags items={['React', 'GraphQL', 'TypeScript']} />}
        </div>
      </div>
    </motion.div>
  )
}
