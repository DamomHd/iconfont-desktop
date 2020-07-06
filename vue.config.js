/* eslint-disable no-template-curly-in-string */
const path = require('path')

module.exports = {
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
    electronBuilder: {
      nodeIntegration: true,
      chainWebpackMainProcess: config => {
        config.module
          .rule('babel')
          .test(/\.js$/)
          .include
            .add(path.resolve(__dirname, 'src/lib/iconfont-sdk'))
            .end()
          .use('babel')
          .loader('babel-loader')
          .options({
            presets: [['@babel/preset-env', { modules: false }]],
            plugins: ['@babel/plugin-proposal-class-properties']
          })
      },
      builderOptions: {
        publish: {
          provider: 'generic',
          url: 'https://cdn.d2.pub/mirrors/d2-projects/iconfont-desktop/releases/latest/'
        },
        productName: 'iconfont-desktop',
        artifactName: '${productName}-${version}.${ext}',
        win: {
          signAndEditExecutable: false,
          target: [
            'nsis',
            'portable'
          ]
        },
        portable: {
          artifactName: '${productName}-portable-${version}.${ext}'
        }
      }
    }
  }
}
