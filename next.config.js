module.exports = {
  presets: ["next/babel"],
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "/",
  },
  output: "export",
  experimental: {
    appDir: false,
  },
};
