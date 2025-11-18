#!/bin/bash

echo "🚀 Iniciando deploy do portfólio no GitHub Pages..."

# Verificar se está em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Não é um repositório Git. Inicializando..."
    git init
fi

# Adicionar remote do GitHub (substitua pelo seu URL)
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "📡 Por favor, adicione o remote do GitHub manualmente:"
    echo "git remote add origin https://github.com/yuhihiro/portifolho.git"
    echo ""
    echo "Depois execute: ./deploy.sh novamente"
    exit 1
fi

# Fazer build do projeto
echo "📦 Fazendo build do projeto..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "❌ Build falhou. Por favor, verifique os erros acima."
    exit 1
fi

# Adicionar mudanças
echo "📁 Adicionando mudanças..."
git add .

# Commit
echo "💾 Fazendo commit..."
git commit -m "Deploy: Atualização do portfólio - $(date '+%Y-%m-%d %H:%M:%S')" || echo "Nenhuma mudança para commitar"

# Push para main
echo "🔄 Fazendo push para GitHub..."
git push origin main

# Deploy com gh-pages
echo "🌐 Fazendo deploy no GitHub Pages..."
npm run deploy

echo "✅ Deploy concluído!"
echo "📍 Acesse seu portfólio em: https://yuhihiro.github.io/portifolho/"
echo ""
echo "⚠️  Importante: Certifique-se de que o GitHub Pages está ativado nas configurações do repositório!"