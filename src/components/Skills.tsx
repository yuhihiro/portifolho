import { Code, Database, Smartphone, Globe, Layers, Zap, CreditCard, Mobile } from 'lucide-react'

const skills = [
  {
    name: 'Frontend',
    icon: <Code className="w-8 h-8" />,
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 }
    ]
  },
  {
    name: 'Backend',
    icon: <Database className="w-8 h-8" />,
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'PostgreSQL', level: 75 }
    ]
  },
  {
    name: 'Mobile',
    icon: <Mobile className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'React Native', level: 80 },
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 80 },
      { name: 'PWA', level: 85 }
    ]
  },
  {
    name: 'Integrações',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'API SIPAG', level: 90 },
      { name: 'Sicredi POS', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 }
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Competências Técnicas
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino, com foco em criar experiências excepcionais
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <div 
              key={category.name}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">{category.name}</h3>
              
              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Sempre aprendendo e evoluindo</span>
          </div>
        </div>
      </div>
    </section>
  )
}