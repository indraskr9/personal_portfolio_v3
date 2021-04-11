import {ProjectTags} from 'components'
import {motion} from 'framer-motion'
import {BiCodeAlt} from 'react-icons/bi'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {ProjectType} from 'utils/project-data'
import {ProjectCardAnimation} from './animation'
import {ProjectLinkIcon} from './ProjectLinkIcon'
import styles from './styles/FeaturedProjectCard.module.css'

type Props = {
  project: ProjectType
  imageOnLeft?: boolean
}

export const FeaturedProjectCard: React.FC<Props> = ({
  project,
  imageOnLeft,
}) => {
  const {photoUrl, name, description, technologies, liveUrl, gitUrl} = project
  return (
    <motion.div
      variants={ProjectCardAnimation}
      className={`${styles.featured_card} flex flex-col md:flex-row p-2 md:p-5 rounded-md relative my-8 bg-opacity-70 hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-white hover:bg-opacity-5 border border-blue-100 border-opacity-5 hover:border-blue-100 hover:border-opacity-20 group`}>
      <div
        className={`${styles.project_thumbnail} relative flex-1 ${
          imageOnLeft && 'md:order-last'
        }`}>
        <div
          className={`${styles.project_links} hidden invisible absolute ${
            imageOnLeft ? 'right-0' : 'left-0'
          } h-full px-2 md:flex flex-col justify-center items-center transition-all duration-500`}>
          <ProjectLinkIcon link={gitUrl} Icon={BiCodeAlt} title='View Code' />
          <ProjectLinkIcon
            link={liveUrl}
            Icon={HiOutlineExternalLink}
            title='Open Live'
          />
        </div>

        <img
          className='object-cover w-full rounded-sm h-52 md:min-h-full'
          src={`/images/${photoUrl}`}
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
          {name}
        </h1>
        <div className='relative min-w-full p-5 my-3 transition-all transform bg-white rounded-sm group-hover:bg-opacity-10 bg-opacity-5'>
          <p className=''>{description}</p>
        </div>
        <div
          className={`flex my-5 justify-start md:${
            imageOnLeft ? 'justify-start' : 'justify-end'
          }`}>
          {<ProjectTags items={technologies} />}
        </div>
        <div className='flex justify-end md:hidden'>
          <ProjectLinkIcon
            link={gitUrl}
            Icon={BiCodeAlt}
            title='View Code'
            size={30}
          />
          <ProjectLinkIcon
            link={liveUrl}
            Icon={HiOutlineExternalLink}
            title='Open Live'
            size={30}
          />
        </div>
      </div>
    </motion.div>
  )
}
