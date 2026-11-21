// app/config/site.ts
export interface NavItem {
  label: string
  to: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface SiteConfig {
  brand: {
    name: string
    tagline: string
    description: string
  }
  nav: NavItem[]
  footer: {
    company: NavItem[]
    resources: NavItem[]
    legal: NavItem[]
  }
  contact: {
    email: string
    phone: string
    address: string
    hours: string
  }
  socials: SocialLink[]
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Acme Digital',
    tagline: 'Building digital products that move the needle.',
    description:
      'We partner with ambitious brands to design, engineer, and scale high-converting web experiences.',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Blog', to: '/blog' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],

  footer: {
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Services', to: '/services' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
    resources: [
      { label: 'Case Studies', to: '/blog' },
      { label: 'Free Consultation', to: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
    ],
  },

  contact: {
    email: 'hello@example.com',
    phone: '+254 700 000 000',
    address: 'Nyali Business Centre, Mombasa, Kenya',
    hours: 'Mon – Fri, 8:00 AM – 5:00 PM EAT',
  },

  socials: [
    { name: 'X (Twitter)', url: 'https://x.com/yourhandle', icon: 'x' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/yourcompany', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/yourorg', icon: 'github' },
    { name: 'Instagram', url: 'https://instagram.com/yourhandle', icon: 'instagram' },
  ],
}