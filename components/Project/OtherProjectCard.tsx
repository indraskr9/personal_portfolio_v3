import {ProjectTags} from 'components'
import {motion} from 'framer-motion'
import {ProjectType} from 'utils/project-data'
import {ProjectCardAnimation} from './animation'

type Props = {
  project: ProjectType
}

export const OtherProjectCard: React.FC<Props> = ({
  project: {name, description, technologies, gitUrl},
}) => {
  return (
    <motion.div
      variants={ProjectCardAnimation}
      style={{
        minWidth: '18rem' /*border: '1px solid rgba(206, 210, 221, 0.10)'*/,
      }}
      className='relative flex-1 px-5 pt-5 pb-0 m-2 transition-all duration-500 border border-blue-200 rounded-md hover:bg-white hover:bg-opacity-10 border-opacity-20 hover:border-blue-100 hover:border-opacity-50'>
      <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
        <h3 className='mb-1 text-4xl font-semibold tracking-wide'>{name}</h3>
      </a>
      <p>{description}</p>
      <div className={`flex flex-wrap my-5 justify-start max-w-full`}>
        <ProjectTags items={technologies} />
      </div>
      <div className='absolute pointer-events-none top-1 right-2'>
        <svg
          width='100'
          height='100'
          viewBox='0 0 173 173'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M53.1614 120.963L62.1718 109.704L33.1655 86.4999L62.1718 63.2963L53.1614 52.0369L17.1197 80.8702C16.2752 81.5455 15.5935 82.4021 15.125 83.3766C14.6565 84.3512 14.4132 85.4186 14.4132 86.4999C14.4132 87.5812 14.6565 88.6486 15.125 89.6232C15.5935 90.5977 16.2752 91.4543 17.1197 92.1296L53.1614 120.963ZM119.838 52.0369L110.828 63.2963L139.834 86.4999L110.828 109.704L119.838 120.963L155.88 92.1296C156.725 91.4543 157.406 90.5977 157.875 89.6232C158.343 88.6486 158.587 87.5812 158.587 86.4999C158.587 85.4186 158.343 84.3512 157.875 83.3766C157.406 82.4021 156.725 81.5455 155.88 80.8702L119.838 52.0369Z'
            fill='#8BA5FF'
            fillOpacity='0.05'
          />
          <path
            d='M107.952 23.1821L79.1187 152.932L65.0408 149.804L93.8741 20.0537L107.952 23.1821Z'
            fill='#8BA5FF'
            fillOpacity='0.05'
          />
        </svg>
      </div>
    </motion.div>
  )
}
