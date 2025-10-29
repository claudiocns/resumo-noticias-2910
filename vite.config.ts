import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Troque pelo nome EXATO do repositório no GitHub.
// Ex.: se o repo chama "resumo-noticias-2910", use '/resumo-noticias-2910/'
// se o repo chama "resumo-de-noticias---rit-tv", use '/resumo-de-noticias---rit-tv/'
export default defineConfig({
  plugins: [react()],
  base: '/resumo-noticias-2910/'
})
