/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.export = nextConfig


const path = require("path");

module.exports = {
  crossOrigin: 'anonymous',
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  // images: {
  //   loader: "cloudinary",
  //   path: "https://res.cloudinary.com/dax2w65"
  // },
};