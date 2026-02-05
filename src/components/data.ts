import { LinkedInIcon, TwitterIcon, InstagramIcon, EmailIcon, CodeIcon, DesignIcon, RocketIcon, ConsultIcon, MLIcon, VisionIcon, MobileIcon } from './Icons'

export const socialLinks = [
  { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/kyle-cervantes?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
  { name: 'Twitter', icon: TwitterIcon, url: '#', color: '#000' },
  { name: 'Instagram', icon: InstagramIcon, url: '#', color: '#e4405f' },
  { name: 'Email', icon: EmailIcon, url: 'mailto:helloo@devworkstudios.net', color: '#ea4335' },
]

export const services = [
  {
    icon: CodeIcon,
    title: 'Web Development',
    description: 'Building responsive, performant websites and web applications using modern frameworks and best practices.',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    icon: MobileIcon,
    title: 'Mobile Development',
    description: 'Creating native and cross-platform mobile applications with seamless user experiences for iOS and Android.',
    tags: ['Android', 'React Native', 'Kotlin']
  },
  {
    icon: MLIcon,
    title: 'Machine Learning',
    description: 'Developing intelligent chatbots and conversational AI systems that enhance user engagement and automate support.',
    tags: ['Chatbots', 'NLP', 'Python']
  },
  {
    icon: VisionIcon,
    title: 'Computer Vision',
    description: 'Building advanced image recognition systems including marine species detection for ocean conservation and research.',
    tags: ['Object Detection', 'Deep Learning', 'TensorFlow']
  },
  {
    icon: DesignIcon,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.',
    tags: ['Figma', 'Design Systems', 'Prototyping']
  },
  {
    icon: RocketIcon,
    title: 'Product Launch',
    description: 'End-to-end product development from ideation to deployment with continuous iteration.',
    tags: ['MVP', 'Agile', 'CI/CD']
  },
  {
    icon: ConsultIcon,
    title: 'Tech Consulting',
    description: 'Strategic guidance on technology choices, architecture decisions, and team scaling.',
    tags: ['Strategy', 'Architecture', 'Mentoring']
  },
]

export const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time reservation and gmail notifactions every transactions.',
    image: 'E-commerce.png',
    tags: ['Next.js', 'Node.js', 'Firebase', 'Mailer'],
    liveUrl: 'https://nemsu-hm-hostel.vercel.app/',
    githubUrl: '#'
  },
  {
    title: 'Room Booking System',
    description: 'A comprehensive hotel room reservation platform with real-time availability, booking management, and email confirmations.',
    image: 'Booking.png',
    tags: ['Next.js', 'Prisma', 'Firebase', 'Nodemailer', 'TypeScript', 'Node.js'],
    liveUrl: 'https://nemsu-hotel.netlify.app/',
    githubUrl: '#'
  },
  {
    title: 'Chatbot Assistant',
    description: 'An AI-powered mental health chatbot using RAG architecture to provide supportive conversations and wellness resources.',
    image: 'Chatbot.png',
    tags: ['Python', 'RAG', 'Kaggle', 'Streamlit', 'OpenAI', 'GeminiAPI'],
    liveUrl: 'https://intelligent-system-finalproj.streamlit.app/',
    githubUrl: '#'
  },
  {
    title: 'Mobile Marine Species Detection',
    description: 'An Android mobile app using YOLOv8 and TensorFlow Lite for real-time marine species identification and ocean conservation research.',
    image: 'Detection.png',
    tags: ['Android Studio', 'Java/Kotlin', 'Roboflow', 'TensorFlow Lite', 'YoloV8', 'ML'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Barangay Bulletin App',
    description: 'A community mobile app for barangay news, announcements, events, and resident services with real-time updates and notifications.',
    image: 'Bulletin.png',
    tags: ['Flutter', 'Firebase', 'Supabase'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Payroll Mobile App',
    description: 'A mobile payroll management system for employee salary processing, attendance tracking, and secure payment disbursements.',
    image: 'payroll_logo.png',
    tags: ['Flutter', 'Firebase', 'Recapatcha'],
    liveUrl: '#',
    githubUrl: '#'
  },
]
