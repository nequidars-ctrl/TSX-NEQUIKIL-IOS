#!/bin/bash

echo "🍎 Build iOS IPA usando GitHub Actions (sin Mac)"
echo ""

if ! command -v gh &> /dev/null; then
    echo "📦 Instalando GitHub CLI..."
    echo "   Ubuntu/Debian: sudo apt install gh"
    echo "   O descarga desde: https://cli.github.com/"
    exit 1
fi

echo "✅ GitHub CLI encontrado"
echo ""

echo "🔐 Autenticando con GitHub..."
gh auth login

echo ""
echo "📤 Creando workflow dispatch..."
gh workflow run build-ios.yml

echo ""
echo "⏳ Esperando a que el build termine..."
echo "   Puedes ver el progreso en:"
echo "   https://github.com/TU_USUARIO/TU_REPO/actions"
echo ""

echo "📥 Para descargar el IPA cuando termine:"
echo "   gh run download -n ios-ipa"
echo ""

echo "💡 O descárgalo manualmente desde:"
echo "   https://github.com/TU_USUARIO/TU_REPO/actions"
echo "   → Selecciona el workflow más reciente"
echo "   → Descarga el artifact 'ios-ipa'"
echo ""

