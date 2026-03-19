/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://linksbfinance.com' : '',
  basePath: '',

  generateBuildId: async () => {
    return `build-${Date.now()}`
  },

  output: 'standalone',
  trailingSlash: false,

  // Configuração para React 19
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion', 'swiper'],
  },
  
  images: {
    formats: ['image/avif', 'image/webp'], // AVIF primeiro para melhor compressão
    minimumCacheTTL: 31536000, // Aumentado para 1 ano para melhor cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // v0 preview often fails on the Next image optimizer route.
    // Serving images directly is more robust across GitHub imports and local/Vercel environments.
    unoptimized: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Tamanhos otimizados baseados no relatório PageSpeed
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    loader: 'default',
    path: '/_next/image',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'linksbfinance.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return []
  },

  async rewrites() {
    return [
    ]
  },

  // Headers de segurança e performance
  async headers() {
    return [
      {
        source: '/manifest.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/images/julia-delmondes.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString(),
          },
          {
            key: 'ETag',
            value: `"julia-${Date.now()}"`,
          },
        ],
      },
      {
        source: '/images/comunidade-link-finance.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString(),
          },
          {
            key: 'ETag',
            value: `"comunidade-${Date.now()}"`,
          },
        ],
      },
      {
        source: '/images/zac-kouri.jpeg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString(),
          },
          {
            key: 'ETag',
            value: `"zac-${Date.now()}"`,
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/css; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/js/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/favicon:size*.(ico|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, stale-while-revalidate=86400', // 6 meses
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=60',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=60',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=60',
          },
        ],
      },
      {
        source: '/(.*)', // Esta regra se aplica a todas as rotas e, por extensão, a qualquer domínio que aponte para este deploy.
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.vercel-insights.com vercel.live https://www.google.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://apis.google.com https://www.gstatic.com https://connect.facebook.net https://embed.lu.ma https://luma.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "img-src 'self' blob: data: https://www.google.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.gstatic.com https://luma.com https://lu.ma",
              "font-src 'self' data: https://fonts.googleapis.com https://fonts.gstatic.com https://use.typekit.net",
              "connect-src 'self' vitals.vercel-insights.com https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com *.supabase.co https://luma.com https://lu.ma https://api.lu.ma",
              "media-src 'self' blob: data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://luma.com https://lu.ma",
              "frame-src 'self' https://luma.com https://lu.ma https://embed.lu.ma",
              "upgrade-insecure-requests"
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 ano para imagens estáticas
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000000).toUTCString(),
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 ano para assets com hash
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/:path*\\.(ico|png|svg|jpg|jpeg|gif|webp|woff|woff2)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, immutable',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=3600, immutable',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=3600, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'no-store',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=3600',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
          {
            key: 'Vercel-CDN-Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=3600',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
          {
            key: 'Last-Modified',
            value: new Date().toUTCString(),
          },
          {
            key: 'ETag',
            value: `"sitemap-${Date.now()}"`,
          },
        ],
      },
    ]
  },

  // Compressão
  compress: true,
  poweredByHeader: false,

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'lucide-react': 'lucide-react/dist/esm/icons',
      }
    }
    
    return config
  },

  // Configurações para build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    BROWSERSLIST: 'defaults and supports es6-module and supports css-grid',
  },
}

export default nextConfig
