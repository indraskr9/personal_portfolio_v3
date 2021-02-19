export type ProjectType = {
  name: string
  description: string
  photoUrl: string
  technologies: string[]
  featured: boolean
  gitUrl: string
  liveUrl: string
}

const data: ProjectType[] = [
  {
    name: 'Exam Portal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis viverra quis hac gravida ut lacus lectus ut. Risus ipsum facilisis ut est eros ullamcorper. Morbi eleifend in posuere elit nam sed. Mattis suscipit ac.',
    photoUrl: 'project.jpg',
    technologies: ['React', 'GraphQL', 'TypeScript'],
    featured: true,
    gitUrl: 'https://github.com/dni9',
    liveUrl: '#',
  },
  {
    name: 'Your Secrets',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis viverra quis hac gravida ut lacus lectus ut. Risus ipsum facilisis ut est eros ullamcorper. Morbi eleifend in posuere elit nam sed. Mattis suscipit ac.',
    photoUrl: 'profile.jpg',
    technologies: ['React', 'GraphQL', 'TypeScript'],
    featured: true,
    gitUrl: 'https://github.com/dni9',
    liveUrl: '#',
  },
  {
    name: 'Sad cat maker',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis viverra quis hac gravida ut lacus lectus ut.',
    photoUrl: '',
    technologies: ['React', 'GraphQL', 'TypeScript'],
    featured: false,
    gitUrl: 'https://github.com/dni9',
    liveUrl: '#',
  },
  {
    name: 'Markdown Note',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis viverra quis hac gravida ut lacus lectus ut.',
    photoUrl: '',
    technologies: ['React', 'GraphQL', 'TypeScript'],
    featured: false,
    gitUrl: 'https://github.com/dni9',
    liveUrl: '#',
  },
  {
    name: 'ncloud',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat sociis viverra quis hac gravida ut lacus lectus ut.',
    photoUrl: '',
    technologies: ['React', 'GraphQL', 'TypeScript'],
    featured: false,
    gitUrl: 'https://github.com/dni9',
    liveUrl: '#',
  },
]
export default data
