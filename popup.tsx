import { useState } from "react"

import { sendToContentScript } from "@plasmohq/messaging"

import "styles/globals.css"

function IndexPopup() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateSchedule = async () => {
    setIsLoading(true)
    try {
      const res = await sendToContentScript({
        name: "query-selector-text",
        body: "test"
      })
    } catch (error) {
      console.error('Error generating schedule:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-80 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-t-lg">
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h1 className="text-xl font-bold text-white">Convertidor Horario</h1>
        </div>
        <p className="text-blue-100 text-sm text-center mt-1">RoBorregos</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Main Action */}
        <div className="text-center">
          <button
            onClick={handleGenerateSchedule}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-lg flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Generando...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Generar Horario (.ics)</span>
              </>
            )}
          </button>
          <p className="text-xs text-gray-600 mt-2">
            Convierte tu horario de Mitec a formato ICS
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Links Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 text-center">Ayuda y Recursos</h3>
          
          <a 
            className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 bg-white hover:bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200 group" 
            href="https://drive.google.com/drive/folders/1vm55XHKsZ1FmipSqHp3riQBzsJ-gsLMn?usp=sharing" 
            target="_blank"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Ver Tutorial</span>
          </a>
          
          <a 
            className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 group" 
            href="https://github.com/IvanRomero03/rbrgs-convertidor-horario/tree/main" 
            target="_blank"
          >
            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm font-medium">Ver Código</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-4 py-3 rounded-b-lg border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          • Desarrollado por RoBorregos
        </p>
      </div>
    </div>
  )
}

export default IndexPopup
