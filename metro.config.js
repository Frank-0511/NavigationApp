const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuración
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const config = {
  resolver: {
    extraNodeModules: {
      '@/routes': path.resolve(__dirname, 'src/presentation/routes'),
      '@/screens': path.resolve(__dirname, 'src/presentation/screens'),
      '@/components': path.resolve(__dirname, 'src/presentation/components'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
