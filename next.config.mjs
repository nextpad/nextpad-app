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
         {
            protocol: "https",
            hostname: "cryptologos.cc",
            port: "",
            pathname: "/logos/**",
         },
      ],
   },
};

export default nextConfig;
