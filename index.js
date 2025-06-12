const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/yt', createProxyMiddleware({
  target: 'https://www.youtube.com',
  changeOrigin: true,
  pathRewrite: { '^/yt': '' },
}));

app.use('/ig', createProxyMiddleware({
  target: 'https://www.instagram.com',
  changeOrigin: true,
  pathRewrite: { '^/ig': '' },
}));

app.listen(process.env.PORT || 3000, () => {
  console.log("Proxy server running");
});
