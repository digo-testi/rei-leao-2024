module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dku9onjpi/**", // Atualize para corresponder ao caminho correto
      },
    ],
  },
};
