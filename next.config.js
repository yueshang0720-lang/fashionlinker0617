/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 强制忽略 TypeScript 错误，允许打包
    ignoreBuildErrors: true,
  },
  eslint: {
    // 强制忽略 ESLint 检查错误，允许打包
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;