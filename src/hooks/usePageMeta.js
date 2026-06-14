import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Muhammad Haikal Ramadhika | Network Engineer',
    description: 'Network Engineer, CCNA & MikroTik Certified, Trainer & Technical Author based in Bogor, Indonesia.',
    keywords: 'Network Engineer, CCNA, MikroTik, MTCNA, MTCRE, Cisco, Trainer'
  },
  '/about': {
    title: 'About | Muhammad Haikal Ramadhika',
    description: 'Learn about Muhammad Haikal Ramadhika - Network Engineer, CCNA certified, Trainer and Technical Author.',
    keywords: 'about, biography, profile, network engineer'
  },
  '/skills': {
    title: 'Skills | Muhammad Haikal Ramadhika',
    description: 'Skills in Cisco, MikroTik, Fortinet networking, routing, switching, network security and technical training.',
    keywords: 'skills, cisco, mikrotik, fortinet, networking, routing, switching'
  },
  '/experience': {
    title: 'Experience | Muhammad Haikal Ramadhika',
    description: 'Professional experience: NOC & Network Security at PT Yaksa Ersada Solusindo, CCNA Trainer, Network competitions.',
    keywords: 'experience, work history, career, network engineer'
  },
  '/projects': {
    title: 'Projects | Muhammad Haikal Ramadhika',
    description: 'Published books: Your Skill in CCNA, In Another World with MTCRE, Master Can Be Better CCNP, Beginner-to-Master MTCNA.',
    keywords: 'projects, books, publications, ccna, mikrotik'
  },
  '/certifications': {
    title: 'Certifications | Muhammad Haikal Ramadhika',
    description: 'Certifications: CCNA, MTCNA, MTCRE, Fortinet FCF, Fortinet FCA, DCAIE. Industry-recognized networking credentials.',
    keywords: 'certifications, certificates, credentials, cisco, mikrotik, fortinet'
  },
  '/contact': {
    title: 'Contact | Muhammad Haikal Ramadhika',
    description: 'Get in touch for collaboration opportunities in networking, training, or technical writing.',
    keywords: 'contact, hire, collaboration, network engineer'
  }
};

export function usePageMeta() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta['/'];

    document.title = meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = meta.description;

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = meta.keywords;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.property = 'og:title';
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = meta.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.property = 'og:description';
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = meta.description;

  }, [location.pathname]);
}
