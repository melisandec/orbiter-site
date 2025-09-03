export const heroData = {
  name: "Mélisande Cornet",
  role: "Software Engineer & Product Designer passionate about creating beautiful and functional digital experiences",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Python",
    "FastAPI",
    "AWS",
    "Figma",
    "Product Design",
  ],
  passion: "Building amazing digital products",
};

export const aboutData = {
  description: [
    "I'm a Software Engineer and Product Designer with a unique blend of technical expertise and creative vision. I specialize in building full-stack applications using modern technologies while maintaining a strong focus on user experience and design.",
    "With experience in both frontend and backend development, I bring a holistic approach to product development. I love creating responsive, accessible, and performant web applications that provide exceptional user experiences.",
  ],
  techStack: [
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.svg",
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
    },
    {
      name: "FastAPI",
      icon: "/icons/fastapi.svg",
    },
    {
      name: "AWS",
      icon: "/icons/aws.svg",
    },
    {
      name: "Figma",
      icon: "/icons/figma.svg",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
    },
  ],
};

export const experienceData = [
  {
    title: "Founding Software Engineer",
    company: "Moderering",
    date: "March 2025 - Present",
    responsibilities: [
      "Conducted in-depth analysis of existing codebase and implemented optimized project structure for the 'Engine' project",
      "Designed and built functional UI mockups using Figma, focusing on user experience",
      "Developed responsive and dynamic web interfaces using Next.js with TypeScript",
      "Built reusable components and optimized performance (reduced loading times, implemented lazy loading)",
      "Integrated and consumed third-party APIs to display dynamic data",
      "Implemented multi-language support using react-i18next",
      "Established proper branching strategies and best versioning practices using Git and GitHub",
      "Integrated backend APIs in Python using FastAPI for efficient and modular services",
      "Deployed web applications on AWS with Amplify, including hosting setup, backend configuration, and CI/CD pipelines",
    ],
  },
  {
    title: "Data Analyst",
    company: "Miyakumo (Freelance)",
    date: "March 2022 - 2023",
    responsibilities: [
      "Produced quantitative and qualitative jewelry research for trend forecasting",
      "Gathered, analyzed, and validated data",
      "Developed and created demand forecasts using Rstudio, Tableau, and Microsoft Excel",
      "Made data-driven product and price recommendations",
    ],
  },
  {
    title: "Consultant for Fashion Industry Project",
    company: "Gate One",
    date: "October 2021 - February 2022",
    responsibilities: [
      "Combined fashion business expertise with machine learning, forecasting, and statistical data analysis",
      "Enhanced strategic decision-making using quantitative methods",
      "Worked collaboratively in a team on project briefs to solve macro-challenges in the fashion industry",
    ],
  },
];

export const projectsData = [
  {
    title: "Moderering Engine",
    description:
      "Full-stack web application for content moderation with real-time processing, built with Next.js, TypeScript, and Python FastAPI backend.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "AWS", "Real-time"],
    links: {
      demo: "https://vercel.com/melisandecs-projects",
      source: "https://github.com/melisandec",
    },
    codePreview: {
      language: "typescript",
      code: `<span class="keyword">interface</span> <span class="type">ModerationEngine</span> {
  <span class="property">processContent</span>(content: <span class="type">string</span>): <span class="type">Promise&lt;ModerationResult&gt;</span>;
  <span class="property">realTimeAnalysis</span>: <span class="type">boolean</span>;
}

<span class="keyword">const</span> <span class="function">analyzeContent</span> = <span class="keyword">async</span> (
  content: <span class="type">string</span>
): <span class="type">Promise&lt;ModerationResult&gt;</span> => {
  <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'/api/moderate'</span>, {
    <span class="property">method</span>: <span class="string">'POST'</span>,
    <span class="property">body</span>: <span class="function">JSON.stringify</span>({ content })
  });
  <span class="keyword">return</span> <span class="keyword">await</span> response.<span class="function">json</span>();
};`,
    },
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive dashboard for jewelry trend forecasting with data visualization, built with React, D3.js, and Python backend.",
    tags: ["React", "D3.js", "Python", "Data Visualization", "Analytics"],
    links: {
      demo: "https://vercel.com/melisandecs-projects",
      source: "https://github.com/melisandec",
    },
    codePreview: {
      language: "typescript",
      code: `<span class="keyword">const</span> <span class="function">TrendAnalysis</span> = () => {
  <span class="keyword">const</span> [trendData, setTrendData] = <span class="function">useState</span>(<span class="keyword">null</span>);
  
  <span class="keyword">useEffect</span>(() => {
    <span class="function">fetchTrendData</span>().<span class="function">then</span>(setTrendData);
  }, []);

  <span class="keyword">return</span> (
    <span class="expression">&lt;div className="dashboard"&gt;
      &lt;TrendChart data={trendData} /&gt;
      &lt;ForecastPanel predictions={trendData?.forecasts} /&gt;
    &lt;/div&gt;</span>
  );
};`,
    },
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website with advanced animations, dark mode, and responsive design built with Astro and TypeScript.",
    tags: ["Astro", "TypeScript", "CSS Animations", "Responsive Design"],
    links: {
      demo: "https://vercel.com/melisandecs-projects",
      source: "https://github.com/melisandec",
    },
    codePreview: {
      language: "typescript",
      code: `<span class="keyword">interface</span> <span class="type">PortfolioProps</span> {
  <span class="property">projects</span>: <span class="type">Project[]</span>;
  <span class="property">theme</span>: <span class="type">'light' | 'dark'</span>;
}

<span class="keyword">const</span> <span class="function">Portfolio</span> = ({ projects, theme }: <span class="type">PortfolioProps</span>) => {
  <span class="keyword">return</span> (
    <span class="expression">&lt;div className={\`portfolio \${theme}\`}&gt;
      {projects.<span class="function">map</span>(project => 
        &lt;ProjectCard key={project.id} {...project} /&gt;
      )}
    &lt;/div&gt;</span>
  );
};`,
    },
  },
];

export const designData = [
  {
    title: "Glossier Tea",
    description:
      "Comprehensive product design portfolio showcasing UI/UX design work, user experience research, and branding projects for Glossier.",
    tags: ["UI/UX Design", "Product Design", "Branding", "Figma"],
    links: {
      behance: "https://www.behance.net/mlisandecornet",
      portfolio: "/files/glossier english portfolio.pdf",
    },
    image: "/images/design-work-1.svg",
  },
  {
    title: "KITH CARE Collection",
    description:
      "Final presentation for KITH CARE project featuring complete brand identity design, user research insights, and strategic design recommendations.",
    tags: ["Branding", "User Research", "Strategic Design", "Presentation"],
    links: {
      behance: "https://www.behance.net/mlisandecornet",
      portfolio: "/files/KITH CARE final pres in English .pdf",
    },
    image: "/images/design-work-2.svg",
  },
  {
    title: "2881 Space Accessories",
    description:
      "Comprehensive presentation showcasing design work, strategic insights, and creative solutions for the 2881 project.",
    tags: [
      "Presentation",
      "Strategic Design",
      "Creative Solutions",
      "Design Thinking",
    ],
    links: {
      behance: "https://www.behance.net/mlisandecornet",
      portfolio: "/files/2881 presentation.pdf",
    },
    image: "/images/design-work-3.svg",
  },
];

export const blogData = [
  {
    title: "Building Full-Stack Applications with Next.js and FastAPI",
    date: "March 15, 2024",
    description:
      "A comprehensive guide to building modern full-stack applications with Next.js frontend and Python FastAPI backend.",
    link: "#",
  },
  {
    title: "The Intersection of Design and Development",
    date: "March 10, 2024",
    description:
      "How my background in product design enhances my software engineering approach and creates better user experiences.",
    link: "#",
  },
];

export const contactData = {
  email: "melisande.cornet@example.com",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/melisandecs",
      icon: "/icons/github.svg",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/melisande-cornet",
      icon: "/icons/linkedin.svg",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/mlisandecornet",
      icon: "/icons/behance.svg",
    },
    {
      name: "Vercel",
      url: "https://vercel.com/melisandecs-projects",
      icon: "/icons/vercel.svg",
    },
  ],
};
