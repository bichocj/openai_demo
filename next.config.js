module.exports = {
    async rewrites() {
        return [
          {
            source: '/pages/api/:path*',
            destination: 'https://mail.google.com/:path*',
          },
        ]
      },
  };