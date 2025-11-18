import { ArrowDown, Code, Palette } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto e informações */}
          <div className="text-center lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-full border border-purple-400/30">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <div className="p-3 bg-blue-500/20 rounded-full border border-blue-400/30">
                <Palette className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Matheus Yukihiro 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Kubo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              Desenvolvedor Full Stack especializado em <span className="text-purple-400 font-semibold">UI/UX</span>
              <br />
              Transformando ideias em experiências digitais incríveis
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <span className="px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30 backdrop-blur-sm">
                React
              </span>
              <span className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30 backdrop-blur-sm">
                TypeScript
              </span>
              <span className="px-6 py-3 bg-green-500/20 text-green-300 rounded-full border border-green-400/30 backdrop-blur-sm">
                Java
              </span>
              <span className="px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full border border-orange-400/30 backdrop-blur-sm">
                Node.js
              </span>
            </div>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 mx-auto lg:mx-0 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Conheça mais sobre mim
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
          
          {/* Foto pessoal */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img 
                src="/WhatsApp Image 2025-10-27 at 08.40.40.jpeg" 
                alt="Matheus Yukihiro Kubo"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-slate-700 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  )
}