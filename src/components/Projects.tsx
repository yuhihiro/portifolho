import { ExternalLink, Github, Eye, Heart, Play, Video } from 'lucide-react'

const projects = [
  {
    title: 'Zix Card',
    description: 'Sistema completo de cartões digitais desenvolvido com React, TypeScript e Java Spring Boot. Interface moderna, responsiva e funcionalidade de gerenciamento de cartões empresariais.',
    video: '/screen-capture.webm',
    technologies: ['React', 'TypeScript', 'Java Spring Boot', 'Tailwind CSS', 'PostgreSQL'],
    category: 'Sistema Web',
    highlights: ['Interface Moderna', 'Backend Robust', 'TypeScript'],
    color: 'from-purple-500 to-pink-500',
    hasVideo: true,
    demoUrl: '#',
    githubUrl: 'https://github.com/yuhihiro'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard moderno com visualizações de dados interativas, gráficos dinâmicos e interface responsiva. Desenvolvido com foco em UX/UI para melhor experiência do usuário.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20analytics%20dashboard%20UI%20dark%20theme%20purple%20and%20blue%20colors%20clean%20design%20charts%20and%20graphs%20professional&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    category: 'Web Application',
    highlights: ['Interface Responsiva', 'Gráficos Interativos', 'Dark Mode'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com carrinho de compras, sistema de pagamento e gestão de produtos. Design moderno e conversão otimizada.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20website%20UI%20modern%20clean%20design%20product%20cards%20shopping%20cart%20purple%20accent%20colors%20professional%20layout&image_size=landscape_16_9',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'E-commerce',
    highlights: ['Checkout Seguro', 'Gestão de Estoque', 'SEO Otimizado'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Task Management App',
    description: 'Aplicação de gerenciamento de tarefas com interface intuitiva, drag-and-drop, e colaboração em tempo real. Foco na produtividade e usabilidade.',
    image: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20app%20UI%20clean%20modern%20design%20drag%20drop%20interface%20kanban%20board%20purple%20and%20blue%20theme%20professional&image_size=landscape_16_9',
    technologies: ['React', 'Express.js', 'Socket.io', 'MongoDB'],
    category: 'Productivity',
    highlights: ['Real-time', 'Drag & Drop', 'Colaborativo'],
    color: 'from-orange-500 to-red-500'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Alguns dos meus projetos mais recentes demonstrando minhas habilidades em desenvolvimento e design
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                {project.hasVideo ? (
                  <div className="relative w-full h-full bg-slate-900">
                    <video 
                      className="w-full h-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={project.video} type="video/webm" />
                      <source src={project.video.replace('.webm', '.mp4')} type="video/mp4" />
                      Seu navegador não suporta vídeos HTML5.
                    </video>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Demo
                    </div>
                  </div>
                ) : (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubUrl || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4 text-gray-400" />
                    </a>
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-lg text-sm border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                      <Heart className="w-3 h-3" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Ver Todos os Projetos
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}