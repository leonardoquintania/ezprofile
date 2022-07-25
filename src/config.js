// config.js
module.exports = {
  github: {
    username: 'leonardoquintania', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['snake', 'leonardoquintania.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'leonardoquintania',
    twitter: 'lsquintania',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    devto: 'leonardoquintania',
    website: 'https://leonardoquintania.github.io',
    phone: '',
    email: 'leonardoquintania@gmail.com',
  },
  skills: [
    'JavaScript',
    'Python',
    'Docker',
    'Typescript',
    'Angular 2+',
    'Node.js',
    'SQL',
    'React.js',
    'C#',
  ],
  experiences: [
    {
      company: 'TOTVS S/A',
      position: 'Especialista I FullStack',
      from: 'Junho 2022',
      to: 'Até o momento',
    },
    {
      company: 'TOTVS S/A',
      position: 'Analista III de FullStack',
      from: 'Outubro 2020',
      to: 'Junho 2022',
    },
    {
      company: 'TOTVS S/A',
      position: 'Analista de Sistemas III de Desenvolvimento de Software',
      from: 'Novembro 2017',
      to: 'Outubro 2020',
    },
    {
      company: 'TOTVS S/A',
      position: 'Analista II de Desenvolvimento de Software',
      from: 'Abril 2013',
      to: ' Novembro 2017',
    },
  ],
  education: [
    {
      institution: 'Centro de Inovação VincIT - UNICIV',
      degree: 'Especialização em Tecnologias e Desenvolvimento WebMobile',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Centro de Inovação VincIT - UNICIV',
      degree:
        'Especialização em Arquitetura de Soluções em Plataforma.Net (C#)',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Centro de Inovação VincIT - UNICIV',
      degree: 'Especialização em Programação Orientada a Objetos',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'Universidade de Mogi das Cruzes',
      degree: 'Bacharelado em Sistemas de Informação',
      from: '2004',
      to: '2008',
    },
  ],
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: 'dev.to', // medium | dev.to
    username: 'leonardoquintania',
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    default: 'halloween',
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,
    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,
    // Available themes. To remove any theme, exclude from here.
    themes: ['halloween'],
  },
};
