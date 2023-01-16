const incstr = require('incstr');

const classNames = {};

const generateClassName = incstr.idGenerator({
  alphabet: 'abcdefghijklmnopqrstuvwxyz'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, {dev, isServer}) => {

    if (!dev) {
      const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin');
      config.plugins.push(new MangleCssClassPlugin({
        classNameRegExp: '((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md|lg|xl)(\\\\\\\\\\\\\\\\|\\\\)?:)*(-?tw-)[a-zA-Z0-9_-]*(\/[0-9])?',
        ignorePrefixRegExp: '((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl)(\\\\\\\\\\\\\\\\|\\\\)?:)*',
        // reserveClassName: ['fa', 'fas', 'far',],
        log: false,
        classGenerator: (original, opts, context) => {
          if (classNames[original]) {
            return classNames[original];
          }

          let nextId;

          do {
            // Class name cannot start with a number.
            nextId = generateClassName();
          } while (/^[0-9_-]/.test(nextId));

          return (classNames[original] = nextId);
        }
      }));
    }

    return config;
  },
}

module.exports = nextConfig
