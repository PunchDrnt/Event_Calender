// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const Content = [
  {
    id: 1,
    name: 'Project Begining',
    topic: 'AAA',
    start: '2022-11-7 12:30',
    end: '2023-4-5 13:30',
    keymsg: 'Logo',
    description: 'About this AAA',
    contentformat: 'image',
    posttype: 'non-boost',
    color: 'purple',
  },
  {
    id: 2,
    name: 'Project Advance',
    topic: 'BBB',
    start: '2022-12-5 11:00',
    end: '2023-2-17 16:30',
    keymsg: 'Video',
    description: 'About this BBB',
    contentformat: 'video',
    posttype: 'boost',
    color: 'red',
  },
]
export default function handler(req, res) {
  res.status(200).json(Content)
}
