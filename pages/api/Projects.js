export const Content = [
  {
    id: 1,
    name: 'Project Begining',
    client: 'AAA Organisation',
  },
  {
    id: 2,
    name: 'Project Advance',
    client: 'BBB Organisation',
  },
]
export default function handler(req, res) {
  res.status(200).json(Content)
}
