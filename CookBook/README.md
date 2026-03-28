#  CookBook - Recetario de Cocina Profesional

###  Estudiantes: [Joan Sebastian Cardenas Gutierrez, Carlos Andres Torres Soto]
###  Aplicación: CookBook

##  Descripción del Proyecto
CookBook es una aplicación móvil robusta desarrollada bajo **React Native CLI** enfocada en la gestión de recetas y consejos culinarios. La aplicación demuestra un dominio avanzado en la gestión de navegación compleja (Tab + Stack), manejo de múltiples estados locales, efectos secundarios con hooks y una UI/UX premium bajo estándares de código limpio.

## Instrucciones de Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/joansel25/delivery-CookBook-devmobile.git
    cd delivery-CookBook-devmobile/CookBook
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # Si usas iOS (Mac solamente):
    cd ios && pod install && cd ..
    ```

3.  **Ejecutar la aplicación:**
    **Android:** `npm run android` o `npx react-native run-android`
    **iOS:** `npm run ios` o `npx react-native run-ios`

4.  **Iniciar Metro Bundler:**
    En una nueva terminal: `npm start` o `npx react-native start`

## Tecnologías Utilizadas
**React Native CLI (v0.84.1)** - Framework de desarrollo móvil.
**React Navigation (v7)** - Gestión de navegación Tab y Stack.
**React (v19)** - Biblioteca para la interfaz de usuario.
**JavaScript (ES6+)** - Lógica y manipulación de datos.
**Contexto y Ciclo de Vida:** UseState, UseEffect, UseCallback para optimización.
**SafeAreaProvider** - Gestión de áreas seguras en dispositivos con notch.

## Arquitectura y Estándares
**Arquitectura Modular:** Separación de intereses en carpetas `data`, `navigation`, `screens` y `styles`.
**Código Limpio:** Variables y funciones en inglés; interfaz de usuario en español.
**UI/UX Premium:** Sombras diferenciadas para Android/iOS, ActivityIndicators y alertas de confirmación.
**Limpieza de Memoria:** Implementación de `clearInterval` y `clearTimeout` en hooks de efecto.

