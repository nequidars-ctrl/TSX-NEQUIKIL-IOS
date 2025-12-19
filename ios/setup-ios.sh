#!/bin/bash
# Script para configurar iOS cuando tengas Mac con Xcode

echo "🍎 Configurando proyecto iOS para TSX NEQUIKIL..."
echo ""

# Verificar si estamos en Mac
if [[ "$OSTYPE" != "darwin"* ]]; then
    echo "❌ Este script solo funciona en macOS"
    echo "📱 Para compilar iOS necesitas:"
    echo "   - Mac con macOS Catalina o superior"
    echo "   - Xcode 12.0 o superior"
    echo "   - CocoaPods instalado"
    exit 1
fi

# Verificar Xcode
if ! command -v xcodebuild &> /dev/null; then
    echo "❌ Xcode no está instalado"
    echo "📥 Instala Xcode desde el App Store"
    exit 1
fi

echo "✅ Xcode encontrado: $(xcodebuild -version | head -n 1)"

# Verificar CocoaPods
if ! command -v pod &> /dev/null; then
    echo "📦 CocoaPods no encontrado. Instalando..."
    sudo gem install cocoapods
else
    echo "✅ CocoaPods encontrado: $(pod --version)"
fi

# Navegar a directorio ios
cd "$(dirname "$0")"

echo ""
echo "📦 Instalando dependencias nativas de iOS..."
pod install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Configuración de iOS completada!"
    echo ""
    echo "🚀 Próximos pasos:"
    echo "   1. Abre: ios/TSXNEQUIKIL.xcworkspace (NO el .xcodeproj)"
    echo "   2. Configura tu Team en Signing & Capabilities"
    echo "   3. Ejecuta: npm run ios"
    echo ""
    echo "💡 O ejecuta directamente desde terminal:"
    echo "   npm run ios"
    echo ""
else
    echo ""
    echo "❌ Error al instalar pods"
    echo "🔧 Intenta:"
    echo "   cd ios"
    echo "   pod repo update"
    echo "   pod install"
    echo ""
fi
