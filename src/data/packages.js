import { Video, Globe } from 'lucide-react'

export const packages = [
  {
    id: 1,
    name: 'Professional',
    price: 'AED 2,900',
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Social media strategy',
      'Content creation & design',
      '8 Cinematic reels, 8 Creactive posts & 8 live storys ',
      'Photography & videography service include',
      'Google Business profile optimization & management',
      'SEO & website management',
      'Paid Ads campaigns',
      'Instagram, Facebook & TikTok ',
    ],
    icon: Video,
    color: 'from-secondary/30 to-secondary/10',
    borderColor: 'border-secondary/50',
  },
  {
    id: 2,
    name: 'Professional Website Design',
    price: 'AED 999',
    description: 'Launch your business online with a modern and responsive website.',
    popular: false,
    features: [
      'Modern & Professional Website Design',
      'Mobile Responsive Layout',
      'Up to 5 Pages Website',
      'SEO Friendly Structure',
      'Contact Form Integration',
      'Social Media Integration',
      'Fast Loading & User-Friendly Design',
    ],
    warning: 'Domain & Hosting Not Included',
    icon: Globe,
    color: 'from-indigo-500/30 to-indigo-500/10',
    borderColor: 'border-indigo-500/50',
  },
]
