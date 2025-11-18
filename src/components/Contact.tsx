import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'matheusptc854@gmail.com',
      action: () => copyToClipboard('matheusptc854@gmail.com')
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Telefone',
      value: '+55 34 99952-7349',
      action: () => copyToClipboard('+55 34 99952-7349')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Localização',
      value: 'Brasil',
      action: null
    }
  ]
  
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/yuhihiro',
      color: 'from-gray-700 to-gray-900'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheus-yukihiro-416640239/',
      color: 'from-blue-600 to-blue-800'
    }
  ]
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades de colaboração
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div 
                    key={info.label}
                    className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                    {info.action && (
                      <button
                        onClick={info.action}
                        className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${social.color} text-white`}>
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{social.name}</p>
                      <p className="text-sm text-gray-400">Conecte-se comigo</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold">
              <Mail className="w-5 h-5" />
              <span>Disponível para novos projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}