/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack: (config) => {
      config.externals.push("pino-pretty", "encoding");
      return config;
   },
   experimental: {
      serverActions: {
         bodySizeLimit: "3mb",
      },
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "polkastarter.com",
            port: "",
            pathname: "/_next/**",
         },
         {
            protocol: "https",
            hostname: "cryptologos.cc",
            port: "",
            pathname: "/logos/**",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co.com",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "iili.io",
            port: "",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "image-charts.com",
            port: "",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
