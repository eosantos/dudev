/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Adicionando suporte a SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Suas opções aqui (se precisar)
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
