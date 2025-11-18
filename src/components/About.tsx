import { Calendar, MapPin, User } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-300">
                <User className="w-5 h-5 text-purple-400" />
                <span>Desenvolvedor Full Stack</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Brasil</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-green-400" />
                <span>1 ano e 3 meses de experiência</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou um desenvolvedor apaixonado por criar experiências digitais excepcionais. 
                Com foco especial em <span className="text-purple-400 font-semibold">UI/UX</span>, 
                transformo ideias complexas em interfaces intuitivas e elegantes.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada começou com estágio na <span className="text-blue-400 font-semibold">Natura</span>, 
                onde desenvolvi habilidades fundamentais em desenvolvimento. 
                Atualmente atuo na <span className="text-green-400 font-semibold">Zix Informática</span> como 
                Analista de Desenvolvimento, aprimorando minhas competências em 
                tecnologias modernas e metodologias ágeis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}