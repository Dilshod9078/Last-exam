/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        URL_LOCAl: "http://3.70.236.23:7777/v1"
    },
    images: {
        domains: [
          "http://3.70.236.23:7777/v1",
          "dribbble.com",
        ],
      }
};

export default nextConfig;
