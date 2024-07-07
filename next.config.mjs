/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "polkastarter.com",
            port: "",
            pathname: "/_next/**",
         },
      ],
   },
};

export default nextConfig;
