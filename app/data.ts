type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ứng dụng AI trong lập trình Web',
    description:
      'Sử dụng AI trong việc lập trình, tối ưu hóa quy trình phát triển Web.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Ứng dụng AI trong công việc',
    description: 'Sử dụng AI để tối ưu hóa quy trình làm việc.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
  {
    name: 'Ứng dụng AI trong cuộc sống',
    description: 'Sử dụng AI để học tập những điều mới mẻ mỗi ngày.',
    link: 'https://motion-primitives.com/',
    video:
      'https://youtube.com/shorts/nxsy7F4SUiQ?si=QhePo86iZ0mt5_8P',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Viettel',
    title: 'Kỹ sư điện tử viễn thông',
    start: '2014',
    end: 'Nay',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Dolphin Technology',
    title: 'Kỹ sư thiết kế vi mạch',
    start: '2013',
    end: '2014',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'EDABK Lab - Đại học Bách Khoa Hà Nội',
    title: 'Sinh viên',
    start: '2010',
    end: '2013',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Meta AI tiến bước đầu sang siêu trí tuệ',
    description: 'Meta vừa bước một chân chậm rãi nhưng chắc vào vùng đất gyi trí tuệ nhân tạo siêu việt (ASI). CEO Mark Zuckerberg xác nhận rằng những hệ thống AI mới nhất của công ty đang bắt đầu tự cải thiện mà không cần con người can thiệp — một dấu hiệu đầu tiên cho khả năng ASI vươn xa hơn cả trí tuệ con người. Ông nhấn mạnh bước tiến này tuy nhỏ nhưng không thể ngó lơ, và do tiềm năng biến đổi xã hội cực lớn, Meta sẽ thận trọng hơn trong việc công bố các hệ thống mạnh nhất ra công chúng.',
    link: 'https://www.livescience.com/technology/artificial-intelligence/meta-ai-takes-first-step-to-superintelligence-and-zuckerberg-will-no-longer-release-the-most-powerful-systems-to-the-public?utm_source=chatgpt.com',
    uid: 'blog-1',
  },
  {
    title: 'Claude Opus 4 đánh bại GPT-4.1: 72.5 % SWE-bench và cuộc chạy đua marathon 7 tiếng liên tục',
    description:
      'Anthropic vừa trình làng dòng Claude 4 gồm hai mẫu mới — Opus 4 và Sonnet 4 — trong một bước tiến đáng kể, nhất là cho các lập trình viên và kỹ sư phần mềm. Trong đó, Claude Opus 4 được xem như “người khổng lồ mới trong làng lập trình AI”',
    link: 'https://www.itpro.com/software/development/anthropic-claude-opus-4-software-development?utm_source=chatgpt.com',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://hust.edu.vn/',
  },
  {
    label: 'LinkedIn',
    link: 'https://hust.edu.vn/',
  },
  {
    label: 'Instagram',
    link: 'https://hust.edu.vn/',
  },
]

export const EMAIL = 'alexbkhn@gmail.com'
