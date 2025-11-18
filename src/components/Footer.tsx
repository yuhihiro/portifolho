import { Heart, Code, Palette } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="flex gap-2">
              <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
                <Code className="w-4 h-4 text-purple-400" />
              </div>
              <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                <Palette className="w-4 h-4 text-blue-400" />
              </div>
            </div>
            <span className="text-white font-semibold">Matheus Yukihiro Kubo</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>por Matheus Kubo • {currentYear}</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-gray-500 text-sm">
            Desenvolvedor Full Stack especializado em UI/UX • Transformando ideias em experiências digitais
          </p>
        </div>
      </div>
    </footer>
  )
}