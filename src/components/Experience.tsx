import { Building, Calendar, TrendingUp, Award } from 'lucide-react'

const experiences = [
  {
    title: 'Analista de Desenvolvimento',
    company: 'Zix Informática',
    period: 'Atual - 1 ano e 3 meses',
    type: 'Tempo Integral',
    location: 'Brasil',
    description: [
      'Desenvolvimento de aplicações web utilizando React, TypeScript e Node.js',
      'Criação de interfaces responsivas e intuitivas com foco em UX/UI',
      'Implementação de APIs RESTful e integração com bancos de dados',
      'Colaboração com equipes multidisciplinares em metodologias ágeis',
      'Manutenção e otimização de sistemas existentes'
    ],
    color: 'from-blue-500 to-cyan-500',
    icon: <Building className="w-6 h-6" />
  },
  {
    title: 'Estagiário em Desenvolvimento',
    company: 'Natura',
    period: 'Início da carreira',
    type: 'Estágio',
    location: 'Brasil',
    description: [
      'Primeira experiência profissional no desenvolvimento de software',
      'Aprendizado de tecnologias web e práticas de desenvolvimento',
      'Participação em projetos de inovação e sustentabilidade',
      'Desenvolvimento de habilidades em trabalho em equipe',
      'Fundamentação sólida em programação e lógica'
    ],
    color: 'from-green-500 to-emerald-500',
    icon: <Award className="w-6 h-6" />
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Minha trajetória profissional e conquistas ao longo da carreira
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.company}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                  {exp.type}
                </span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-400/30">
                  {exp.location}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {index === 0 && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Atual
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-400/30">
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">+1 ano de experiência em desenvolvimento</span>
          </div>
        </div>
      </div>
    </section>
  )
}