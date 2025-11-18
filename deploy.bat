@echo off
echo 🚀 Iniciando deploy do portfólio no GitHub Pages...

REM Verificar se está em um repositório git
git rev-parse --git-dir >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Não é um repositório Git. Inicializando...
    git init
)

REM Verificar se tem remote do GitHub
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo 📡 Por favor, adicione o remote do GitHub manualmente:
    echo git remote add origin https://github.com/yuhihiro/portifolho.git
    echo.
    echo Depois execute: deploy.bat novamente
    pause
    exit /b 1
)

REM Fazer build do projeto
echo 📦 Fazendo build do projeto...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build falhou. Por favor, verifique os erros acima.
    pause
    exit /b 1
)

REM Adicionar mudanças
echo 📁 Adicionando mudanças...
git add .

REM Commit
echo 💾 Fazendo commit...
git commit -m "Deploy: Atualização do portfólio - %date% %time%" || echo Nenhuma mudança para commitar

REM Push para main
echo 🔄 Fazendo push para GitHub...
git push origin main

REM Deploy com gh-pages
echo 🌐 Fazendo deploy no GitHub Pages...
call npm run deploy

echo ✅ Deploy concluído!
echo 📍 Acesse seu portfólio em: https://yuhihiro.github.io/portifolho/
echo.
echo ⚠️  Importante: Certifique-se de que o GitHub Pages está ativado nas configurações do repositório!
pause