import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Youssef Ayman Mohamed | Software Engineer Portfolio',
    short_name: 'Youssef Ayman Portfolio',
    description: 'Highly capable C++, .NET Core, React systems programmer showcase.',
    start_url: '/',
    display: 'standalone',
    background_color: '#03001e',
    theme_color: '#818cf8',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
        purpose: 'maskable',
      },
    ],
  }
}
