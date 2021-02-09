import {IconType, IconBaseProps} from 'react-icons'

type Props = {
  Icon: IconType
  link?: string
}

export const ProjectLinkIcon: React.FC<Props & IconBaseProps> = ({
  Icon,
  link = '#',
  title,
  size = 40,
}) => (
  <a href={link} target='_blank noopener noreferrer'>
    <Icon
      title={title}
      size={size}
      className='mr-2 md:mb-2 md:mr-0 cursor-pointer hover:text-dark2 transition-all duration-500'
    />
  </a>
)
