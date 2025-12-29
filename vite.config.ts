import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'apk-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.apk')) {
            res.setHeader('Content-Type', 'application/vnd.android.package-archive')
            const filename = req.url.split('/').pop()
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
          }
          next()
        })
      }
    }
  ],
  server: {
    // Allow all hosts (useful for dynamic ngrok tunnels). Be cautious:
    // this exposes the dev server to requests from any hostname.
    // If you want to restrict later, replace with a wildcard array like ['.ngrok-free.app']
    host: true,
    // `allowedHosts` accepts `true` or an array of host strings. Use `true` to allow any host.
    // Prefer a more specific array (e.g. ['.ngrok-free.app']) for security when possible.
    allowedHosts: true
  },
})