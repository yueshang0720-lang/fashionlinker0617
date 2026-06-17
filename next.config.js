/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 强行忽略 TypeScript 的所有语法/类型错误
    ignoreBuildErrors: true,
  },
  eslint: {
    // 强行忽略 ESLint 的所有格式检查错误
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;