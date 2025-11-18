# 🚀 GUIA COMPLETO - Deploy no GitHub Pages

## 📋 Passo a Passo para Hospedar seu Portfólio

### 1️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. **Nome do repositório**: `portifolho` (ou o nome que preferir)
3. **Descrição**: "Portfólio profissional de Matheus Yukihiro Kubo"
4. **Visibilidade**: Público (necessário para GitHub Pages)
5. **NÃO** marque "Initialize this repository with a README"
6. Clique em "Create repository"

### 2️⃣ Configurar Remote do Git

No terminal/powershell, execute:

```bash
git remote add origin https://github.com/yuhihiro/portifolho.git
```

### 3️⃣ Fazer Push do Código

```bash
git push -u origin main
```

### 4️⃣ Ativar GitHub Pages

1. Vá para as **Settings** do repositório
2. Role até **Pages** no menu lateral
3. Em **Source**, selecione: "Deploy from a branch"
4. Escolha a branch: `main` e pasta: `/root`
5. Clique em **Save**

### 5️⃣ Aguardar Deploy

- O deploy automático começará assim que você fizer push
- Pode levar 5-10 minutos para estar disponível
- Acesse: `https://yuhihiro.github.io/portifolho/`

## 🔄 Atualizações Futuras

### Método Automático (Recomendado)

Sempre que você fizer push para a branch `main`, o GitHub Actions fará o deploy automaticamente:

```bash
git add .
git commit -m "Atualização do portfólio"
git push origin main
```

### Método Manual (Alternativa)

Se preferir, pode usar o script que criamos:

**Windows:**
```bash
deploy.bat
```

**Linux/Mac:**
```bash
./deploy.sh
```

## 📍 URLs Importantes

- **Repositório**: https://github.com/yuhihiro/portifolho
- **Portfólio Online**: https://yuhihiro.github.io/portifolho/

## ⚠️ Pontos Importantes

1. **Nome do Repositório**: Use exatamente `portifolho` ou ajuste no `vite.config.ts`
2. **Branch Principal**: Certifique-se de usar a branch `main`
3. **GitHub Pages**: Demora alguns minutos para atualizar após o deploy
4. **Imagens e Vídeos**: Já estão configurados para funcionar online

## 🆘 Problemas Comuns

### ❌ Página em Branco
- Verifique se o `base: '/portifolho/'` está correto no `vite.config.ts`
- Confira se os arquivos foram buildados corretamente

### ❌ Imagens não carregam
- Certifique-se de que estão na pasta `public/`
- Use caminhos absolutos começando com `/`

### ❌ Deploy falha
- Verifique as Actions em: https://github.com/yuhihiro/portifolho/actions
- Confira se o GitHub Pages está ativado nas settings

## 🎉 Parabéns!

Seu portfólio profissional estará online em minutos! 🚀

**Próximo passo**: Compartilhe o link do seu portfólio no LinkedIn e currículo!