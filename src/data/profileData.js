// Profile Data - Muhammad Haikal Ramadhika

export const profileData = {
  name: "Muhammad Haikal Ramadhika",
  title: "Junior Network Engineer",
  tagline: "Cisco, MikroTik & Fortinet Certified | CCNA, MTCRE, FCA",
  email: "mhaikramadhika5@gmail.com",
  phone: null,
  location: "Bandung, Indonesia",
  linkedin: "https://linkedin.com/in/muhammad-haikal-ramadhika-5749b22a6",
  github: "https://github.com/haikal-ramadhika",
  credlyUrl: "https://www.credly.com/users/m-haikal-ramadhika",
  about: `Graduate of SMK IDN Boarding School, Junior Network Engineer with hands-on experience in network design, security, and protocol implementation. Holds CCNA, MTCRE, MTCNA, DCAIE, and Fortinet certifications. Active as a trainer and technical book author, with competition experience at national and international levels.`,
};

export const infoCards = [
  {
    icon: 'briefcase',
    title: 'Current role',
    description: 'NOC Engineer — PT Inovasi Tjaraka Buana (MyNet)',
    color: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'border-glow-top-cyan'
  },
  {
    icon: 'student',
    title: 'Education',
    description: 'SMK IDN Boarding School — TKJ',
    color: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    glow: 'border-glow-top-purple'
  },
  {
    icon: 'chart',
    title: 'Specialization',
    description: 'Cisco, MikroTik & Fortinet',
    color: 'text-accent-green',
    bg: 'bg-accent-green/10',
    glow: 'border-glow-top-green'
  },
  {
    icon: 'map',
    title: 'Location',
    description: 'Bandung, Indonesia',
    color: 'text-primary',
    bg: 'bg-primary/10',
    glow: 'border-glow-top-cyan'
  },
];

export const achievements = [
  { text: 'CCNA Certified', icon: 'network', color: 'text-primary' },
  { text: 'MTCRE Certified', icon: 'router', color: 'text-accent-green' },
  { text: 'Technical Author', icon: 'book', color: 'text-accent-purple' },
  { text: 'APJC NetAcad Riders 2024', icon: 'training', color: 'text-accent-amber' },
  { text: 'FCA Certified', icon: 'shield', color: 'text-primary' },
];

export const experiences = [
  // --- KERJA / MAGANG ---
  {
    title: 'NOC Engineer',
    company: 'PT Inovasi Tjaraka Buana (MyNet)',
    location: 'Bandung, Jawa Barat',
    date: 'Feb 2026 - Present',
    description: 'NOC Engineering role focusing on network monitoring, incident management, and maintaining ISP infrastructure uptime. Handles network troubleshooting, configuration changes, and coordinates with field teams for service restoration.',
    type: 'full-time',
    category: 'work',
    icon: 'shield',
    color: 'primary',
    metrics: [
      { value: '24/7', label: 'monitoring', color: 'text-primary' },
      { value: '99.9%', label: 'uptime target', color: 'text-accent-green' }
    ],
    pillars: ['Network Monitoring', 'Incident Management', 'ISP Infrastructure', 'Troubleshooting']
  },
  {
    title: 'Network Security Engineer',
    company: 'Yaksa Ersada Solusindo',
    location: 'Kota Tangerang, Banten',
    date: 'Jul 2025 - Jan 2026',
    description: 'Internship role focusing on network operations and security. Tasks included monitoring network performance (NOC duties), handling incident tickets, and assisting in security-related configurations such as access control and web filtering.',
    type: 'magang',
    category: 'work',
    icon: 'shield',
    color: 'primary',
    metrics: [
      { value: '24/7', label: 'monitoring', color: 'text-primary' },
      { value: '99%', label: 'uptime', color: 'text-accent-green' }
    ],
    pillars: ['Network Ops', 'Firewalls', 'Access Lists', 'Incident Response']
  },
  {
    title: 'Network Administrator',
    company: 'Institut Pertanian Bogor (IPB)',
    location: 'Bogor, Indonesia',
    date: 'Apr 2025 - May 2025',
    description: 'Redesigned and configured LAN at IPB using MikroTik, with DHCP, NAT, firewall, and bandwidth management.',
    type: 'part-time',
    category: 'work',
    icon: 'router',
    color: 'accent-green',
    pillars: ['Wireless Networking', 'Firewalls', 'DHCP', 'NAT', 'Bandwidth Management']
  },
  {
    title: 'Competency Assessor (UKK)',
    company: 'IPB University Vocational School',
    location: 'Bogor, Indonesia',
    date: 'Apr - May 2025',
    description: 'Assessed student network configuration, troubleshooting, and technical implementation skills.',
    type: 'freelance',
    category: 'work',
    icon: 'assess',
    color: 'accent-amber',
    metrics: [
      { value: '40+', label: 'students assessed', color: 'text-primary' },
      { value: '95%', label: 'pass rate', color: 'text-accent-green' }
    ],
    pillars: ['Assessment', 'Troubleshooting', 'Config', 'Evaluation']
  },

  // --- TRAINER / MENGAJAR ---
  {
    title: 'CCNA Instructor',
    company: 'Kolej Vokasional Ipoh',
    location: 'Perak, Malaysia',
    date: 'Nov 2024 - Dec 2024',
    description: 'Selected by school for overseas instruction in Malaysia. Delivered CCNA training and lab mentoring to international students covering routing & switching fundamentals.',
    type: 'seasonal',
    category: 'trainer',
    icon: 'training',
    color: 'primary',
    metrics: [
      { value: '20+', label: 'students trained', color: 'text-primary' },
      { value: '40h', label: 'training hours', color: 'text-accent-green' }
    ],
    pillars: ['Cisco Switches', 'LAN Switching', 'CCNA']
  },
  {
    title: 'CCNA Instructor',
    company: 'SMA Gita Kirtti 2',
    location: 'Jakarta, Indonesia',
    date: 'Nov 2024',
    description: 'Taught CCNA material including routing & switching fundamentals and guided lab practice sessions for high school students.',
    type: 'seasonal',
    category: 'trainer',
    icon: 'training',
    color: 'accent-green',
    metrics: [
      { value: '30+', label: 'students', color: 'text-primary' },
      { value: '5', label: 'lab sessions', color: 'text-accent-green' }
    ],
    pillars: ['Cisco Routers', 'Cisco Switches', 'CCNA', 'Lab']
  },
  {
    title: 'Instructor',
    company: 'Al-Ashr Boarding School',
    location: 'Bogor, Indonesia',
    date: 'May 2024',
    description: 'Taught CCNA material including network fundamentals, IP addressing, and basic device configuration.',
    type: 'seasonal',
    category: 'trainer',
    icon: 'training',
    color: 'accent-purple',
    pillars: ['Network Fundamentals', 'Network Access', 'IP Addressing', 'CCNA']
  },
  {
    title: 'Network Trainer',
    company: 'Ar-Rahman Boarding School',
    location: 'Sukabumi, Indonesia',
    date: 'May 2024',
    description: 'Provided training on Network Fundamentals material including IP addressing, OSI Layer, and basic network device configuration.',
    type: 'seasonal',
    category: 'trainer',
    icon: 'training',
    color: 'primary',
    metrics: [
      { value: '25+', label: 'students', color: 'text-primary' },
      { value: '3', label: 'days', color: 'text-accent-green' }
    ],
    pillars: ['Network Fundamentals', 'Network Troubleshooting', 'IP Addressing', 'Basics']
  },
  {
    title: 'Student Teacher',
    company: 'Pesantren Qur\'an Al-Hikmah Bogor',
    location: 'Bogor, Indonesia',
    date: 'Aug 2022 - Jul 2023',
    description: 'After completing tasmi\' 30 Juz, was asked to continue as a teacher at the boarding school. First and most valuable experience for future development.',
    type: 'part-time',
    category: 'trainer',
    icon: 'training',
    color: 'accent-amber',
    pillars: ['Teaching', 'Mentoring', 'Education']
  },

  // --- LOMBA / PRESTASI ---
  {
    title: '2nd Place — National Computer Network Competition',
    company: 'Politeknik Negeri Bali',
    location: 'Bali, Indonesia',
    date: 'Oct 2024',
    description: 'Won 2nd place in an offline national-level networking competition at Politeknik Negeri Bali (PNB) with MikroTik MTCNA material.',
    type: 'competition',
    category: 'competition',
    icon: 'trophy',
    color: 'primary',
    metrics: [
      { value: '2nd', label: 'place nationally', color: 'text-primary' }
    ],
    pillars: ['Network Access', 'Network Fundamentals', 'MikroTik', 'MTCNA']
  },
  {
    title: '1st Place — Internal Level Networking Competition',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Feb 2024 - Mar 2024',
    description: 'Won the internal networking competition at school, leading to selection for the international-level APJC Netacad Riders 2024 competition.',
    type: 'competition',
    category: 'competition',
    icon: 'trophy',
    color: 'accent-green',
    pillars: ['IP Services', 'SSH Client', 'Routing', 'Switching']
  },
  {
    title: 'Participant — APJC Netacad Riders 2024',
    company: 'ID-Networkers (IDN.ID)',
    location: 'Central Jakarta, Indonesia',
    date: 'Mar 2024',
    description: 'Selected to represent at this prestigious international-level networking competition after winning the internal school competition.',
    type: 'competition',
    category: 'competition',
    icon: 'trophy',
    color: 'accent-purple',
    pillars: ['Networking', 'Competition', 'International']
  },

  // --- PROYEK BUKU ---
  {
    title: 'IT Book Project #3 — Your Skill in CCNA',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Jan 2024 - Jun 2024',
    description: 'Third IT book project — a comprehensive CCNA study guide up to 600 pages covering networking fundamentals and Cisco product introductions.',
    type: 'project',
    category: 'project',
    icon: 'book',
    color: 'primary',
    skills: ['Cisco Networking Devices', 'Network Access', 'Routing', 'Switching', 'Technical Writing']
  },
  {
    title: 'IT Book Project #2 — In Another World with MTCRE',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Nov 2023 - Dec 2023',
    description: 'Second IT book project focused on static and dynamic routing, VLAN, and tunneling on MikroTik routers to strengthen MTCRE material understanding.',
    type: 'project',
    category: 'project',
    icon: 'book',
    color: 'accent-green',
    skills: ['Routing Protocols', 'Static Routing', 'OSPF', 'VLAN', 'Tunneling']
  },
  {
    title: 'IT Book Project #1 — Beginner-to-Master MTCNA',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Sep 2023 - Oct 2023',
    description: 'First IT book project as a high school student. Complete guide covering MikroTik RouterOS fundamentals to strengthen MTCNA material understanding.',
    type: 'project',
    category: 'project',
    icon: 'book',
    color: 'accent-purple',
    skills: ['MikroTik', 'IP Services', 'Firewall', 'NAT', 'QoS', 'RouterOS']
  },
  {
    title: 'Master Can Be Better CCNP',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Jul 2024 - Present',
    description: 'A 500+ page lab-based book on advanced Cisco networking for CCNP certification preparation. Still in development.',
    type: 'project',
    category: 'project',
    icon: 'book',
    color: 'accent-purple',
    skills: ['CCNP', 'Cisco', 'Advanced Routing', 'Enterprise Networks', 'Technical Writing']
  },
  {
    title: 'My Big Dream in AWS',
    company: 'IDN Boarding School',
    location: 'Bogor, Indonesia',
    date: 'Jan - May 2025',
    description: 'AWS fundamentals book covering EC2, VPC, IAM, and S3 for beginners. Comprehensive cloud networking guide.',
    type: 'project',
    category: 'project',
    icon: 'book',
    color: 'accent-purple',
    skills: ['AWS', 'Cloud', 'EC2', 'VPC', 'IAM', 'S3', 'Technical Writing']
  },
];

export const skillGroups = [
  {
    title: 'Cisco (CCNA)',
    accentColor: 'text-accent-purple',
    iconBg: 'bg-accent-purple/10',
    borderColor: 'hover:border-accent-purple/30',
    glow: 'hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]',
    tagColor: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
    gradient: 'from-accent-purple to-accent-amber',
    skills: [
      { name: 'Routing & Switching', icon: 'router', context: 'VLAN, Inter-VLAN routing, STP, EtherChannel, HSRP configuration on Cisco devices.', project: 'CCNA Certification' },
      { name: 'IPv4 & IPv6', icon: 'ip', context: 'Subnetting, VLSM, static and dynamic routing for both IPv4 and IPv6 networks.', project: 'CCNA Certification' },
      { name: 'Access Lists', icon: 'shield', context: 'Standard and extended ACLs for traffic filtering and network security policy implementation.', project: 'CCNA Certification' },
      { name: 'OSPF & EIGRP', icon: 'route', context: 'Dynamic routing protocol configuration, optimization, and troubleshooting.', project: 'CCNA Certification' },
      { name: 'DHCP & NAT', icon: 'server', context: 'DHCP server configuration, NAT/PAT for IP address conservation and network access.', project: 'CCNA Certification' },
      { name: 'Network Security', icon: 'lock', context: 'Port security, DHCP snooping, dynamic ARP inspection, and basic firewall concepts.', project: 'CCNA Certification' },
      { name: 'DMVPN', icon: 'vpn', context: 'Dynamic Multipoint VPN configuration, mGRE, NHRP, and routing over DMVPN tunnels.', project: 'CCNP Certification' },
      { name: 'MPLS', icon: 'route', context: 'MPLS label switching, LDP, VPNv4, and MPLS Layer 3 VPN configuration.', project: 'CCNP Certification' },
    ]
  },
  {
    title: 'MikroTik (MTCNA, MTCRE)',
    accentColor: 'text-accent-green',
    iconBg: 'bg-accent-green/10',
    borderColor: 'hover:border-accent-green/30',
    glow: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.08)]',
    tagColor: 'bg-accent-green/10 text-accent-green border-accent-green/20',
    gradient: 'from-accent-green to-primary',
    skills: [
      { name: 'RouterOS Administration', icon: 'router', context: 'Full RouterOS configuration including interface management, user management, and system backup.', project: 'MTCNA Certification' },
      { name: 'Firewall & NAT', icon: 'shield', context: 'Firewall filter rules, NAT masquerade, dst-nat, and connection tracking configuration.', project: 'MTCNA Certification' },
      { name: 'VLAN & Bridging', icon: 'net', context: 'VLAN configuration, bridge interfaces, and Ethernet-like interface management.', project: 'MTCRE Certification' },
      { name: 'OSPF Routing', icon: 'route', context: 'OSPF configuration on MikroTik, area types, route redistribution, and optimization.', project: 'MTCRE Certification' },
      { name: 'VPN & Tunneling', icon: 'vpn', context: 'PPTP, L2TP, SSTP, OpenVPN tunnels and IPsec configuration for secure connectivity.', project: 'MTCRE Certification' },
      { name: 'QoS & Bandwidth Management', icon: 'speed', context: 'Queue trees, simple queues, PCQ for bandwidth management and traffic shaping.', project: 'MTCNA Certification' },
    ]
  },
  {
    title: 'Fortinet & Security',
    accentColor: 'text-primary',
    iconBg: 'bg-primary/10',
    borderColor: 'hover:border-primary/30',
    glow: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]',
    tagColor: 'bg-primary/10 text-primary border-primary/20',
    gradient: 'from-primary to-accent-cyan',
    skills: [
      { name: 'FortiGate Firewall', icon: 'shield', context: 'FortiGate configuration including firewall policies, NAT, DHCP, and HA setup.', project: 'Fortinet FCA Certification' },
      { name: 'Network Security', icon: 'lock', context: 'Security policies, threat protection, application control, and web filtering.', project: 'Fortinet FCF Certification' },
      { name: 'High Availability', icon: 'ha', context: 'FortiGate HA clustering, failover configuration, and synchronization.', project: 'Fortinet FCA Certification' },
    ]
  },
  {
    title: 'Tools & Technologies',
    accentColor: 'text-accent-cyan',
    iconBg: 'bg-accent-cyan/10',
    borderColor: 'hover:border-accent-cyan/30',
    glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]',
    tagColor: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
    gradient: 'from-accent-cyan to-accent-purple',
    skills: [
      { name: 'PNET Lab / EVE-NG', icon: 'lab', context: 'Virtual network labs for Cisco and MikroTik device emulation and topology testing.', project: null },
      { name: 'Cisco Packet Tracer', icon: 'net', context: 'Network simulation for CCNA-level topology design and protocol verification.', project: null },
      { name: 'VMWare & Virtualization', icon: 'vm', context: 'Virtual machine management for network appliance testing and lab environments.', project: null },
      { name: 'Canva & Figma', icon: 'design', context: 'Technical diagram creation and visual documentation for network topologies.', project: null },
    ]
  },
];

export const projects = [
  {
    id: 1,
    title: 'Your Skill in CCNA',
    period: 'Jan - Jul 2024',
    association: 'Published Book',
    icon: 'book',
    role: 'Author',
    roleType: 'individual',
    category: 'books',
    description: 'A 400-page comprehensive book covering networking fundamentals and Cisco product introductions. Designed for CCNA certification aspirants.',
    responsibilities: [
      'Authored comprehensive CCNA study material covering all exam topics.',
      'Designed practical lab scenarios for hands-on learning.',
      'Included troubleshooting guides and best practices.',
    ],
    impact: 'Bestselling CCNA preparation book used by students across multiple institutions.',
    skills: ['CCNA', 'Routing', 'Switching', 'Network Security', 'Technical Writing'],
    color: 'text-primary',
  },
  {
    id: 2,
    title: 'In Another World with MTCRE',
    period: 'Nov 2023 - Feb 2024',
    association: 'Published Book',
    icon: 'book',
    role: 'Author',
    roleType: 'individual',
    category: 'books',
    description: 'Focused on static and dynamic routing, VLAN, and tunneling on MikroTik routers. Advanced MikroTik routing concepts.',
    responsibilities: [
      'Developed structured MTCRE curriculum with real-world scenarios.',
      'Created detailed routing protocol configuration examples.',
      'Included troubleshooting methodologies and best practices.',
    ],
    impact: 'Go-to resource for MikroTik routing certification preparation.',
    skills: ['MikroTik', 'MTCRE', 'OSPF', 'VLAN', 'Tunneling', 'Technical Writing'],
    color: 'text-accent-green',
  },
  {
    id: 3,
    title: 'Master Can Be Better CCNP',
    period: 'Jul 2024 - Present',
    association: 'Ongoing Book',
    icon: 'book',
    role: 'Author',
    roleType: 'individual',
    category: 'books',
    description: 'A 1000+ page lab-based book on advanced Cisco networking for CCNP certification preparation. Still in development.',
    responsibilities: [
      'Writing advanced routing and switching content.',
      'Designing complex multi-protocol lab scenarios.',
      'Creating comprehensive troubleshooting guides.',
    ],
    impact: 'Upcoming comprehensive CCNP preparation resource.',
    skills: ['CCNP', 'Cisco', 'Advanced Routing', 'Enterprise Networks', 'Technical Writing'],
    color: 'text-accent-purple',
    status: 'ongoing',
  },
  {
    id: 4,
    title: 'Beginner-to-Master MTCNA',
    period: 'Oct - Nov 2023',
    association: 'Published Book',
    icon: 'book',
    role: 'Author',
    roleType: 'individual',
    category: 'books',
    description: 'Complete guide covering MikroTik RouterOS fundamentals and basic configuration from beginner to master level.',
    responsibilities: [
      'Created beginner-friendly MikroTik content.',
      'Covered RouterOS interface, firewall, NAT, and QoS.' ,
      'Included step-by-step configuration guides.',
    ],
    impact: 'First published book establishing the author as a MikroTik subject matter expert.',
    skills: ['MikroTik', 'MTCNA', 'RouterOS', 'Firewall', 'QoS', 'Technical Writing'],
    color: 'text-accent-green',
  },
  {
    id: 5,
    title: 'My Big Dream in AWS',
    period: 'Jan - May 2025',
    association: 'Published Book',
    icon: 'book',
    role: 'Author',
    roleType: 'individual',
    category: 'books',
    description: 'AWS fundamentals book covering EC2, VPC, IAM, and S3 for beginners. Comprehensive cloud networking guide.',
    responsibilities: [
      'Authored AWS cloud fundamentals content.',
      'Covered VPC design and EC2 configuration.',
      'Included IAM security best practices.',
    ],
    impact: 'Expanded portfolio into cloud networking domain.',
    skills: ['AWS', 'Cloud', 'EC2', 'VPC', 'IAM', 'S3', 'Technical Writing'],
    color: 'text-accent-purple',
  },
  {
    id: 6,
    title: 'Enterprise Multi-Protocol Network Lab: Cisco',
    period: 'Jan 2024 - Present',
    association: 'Self-Project',
    icon: 'lab',
    role: 'Network Engineer',
    roleType: 'individual',
    category: 'project',
    description: 'Multi-protocol enterprise network lab built on Cisco infrastructure. Performed end-to-end troubleshooting and documented the implementation of routing protocols, switching, and security configurations.',
    responsibilities: [
      'Designed and built multi-protocol network topology using Cisco routers and switches.',
      'Configured OSPF, EIGRP, BGP, and redistribution between protocols.',
      'Implemented VLANs, trunking, STP, EtherChannel, and inter-VLAN routing.',
      'Performed end-to-end troubleshooting and documented the full implementation.',
    ],
    impact: 'Comprehensive enterprise networking lab demonstrating multi-vendor protocol integration and troubleshooting methodology.',
    skills: ['Cisco', 'OSPF', 'EIGRP', 'BGP', 'VLAN', 'STP', 'EtherChannel', 'Troubleshooting'],
    color: 'text-primary',
  },
];

export const certifications = [
  { title: 'Fortinet Certified Associate in Cybersecurity (FCA)', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FCF — Technical Introduction to Cybersecurity 2.0', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'Fortinet Certified Fundamentals in Cybersecurity (FCF)', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FCF — Getting Started in Cybersecurity 3.0', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FCF — Introduction to the Threat Landscape 3.0', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FortiGate Administrator', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FCSS SD-WAN Architect', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FCSS Enterprise Firewall', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FortiAnalyzer Administrator', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FortiManager Administrator', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FortiProxy Administrator', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'FortiClient EMS Administrator', org: 'Fortinet', date: 'Jul 2025', icon: 'fortinet', color: 'text-error', bg: 'bg-error/10' },
  { title: 'AI Solutions on Cisco Infrastructure Essentials (DCAIE)', org: 'Cisco', date: 'Apr 2025', icon: 'ai', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Cisco Certified Network Associate (CCNA)', org: 'Cisco', date: 'Apr 2025', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Network Addressing and Basic Troubleshooting', org: 'Cisco', date: 'Feb 2025', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Networking Devices and Initial Configuration', org: 'Cisco', date: 'Jul 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Networking Basics', org: 'Cisco', date: 'Jun 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'CCNAv7: Introduction to Networks', org: 'Cisco', date: 'Apr 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Introduction to Cybersecurity', org: 'Cisco', date: 'May 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'CCNAv7: Switching, Routing, and Wireless Essentials', org: 'Cisco', date: 'Apr 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'CCNAv7: Enterprise Networking, Security, and Automation', org: 'Cisco', date: 'Apr 2024', icon: 'cisco', color: 'text-primary', bg: 'bg-primary/10' },
  { title: 'Networking Essentials', org: 'Cisco Networking Academy', date: 'Aug 2023', icon: 'cisco', color: 'text-accent-green', bg: 'bg-accent-green/10' },
  { title: 'MikroTik Certified Routing Engineer (MTCRE)', org: 'MikroTik', date: 'Dec 2023', icon: 'mikrotik', color: 'text-accent-green', bg: 'bg-accent-green/10' },
  { title: 'MikroTik Certified Network Associate (MTCNA)', org: 'MikroTik', date: 'Nov 2023', icon: 'mikrotik', color: 'text-accent-green', bg: 'bg-accent-green/10' },
];
