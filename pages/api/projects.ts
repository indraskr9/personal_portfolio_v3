import {NextApiRequest, NextApiResponse} from 'next'
import data, {ProjectType} from 'utils/project-data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectType[]>
) {
  res.status(200).json(data)
}
