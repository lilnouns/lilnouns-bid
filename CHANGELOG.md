# Changelog

All notable changes to this project will be documented in this file.

## [1.1.2] - 2023-01-23

### <!-- 05 -->Documentation

- Add basic guidelines to contributing to the repository
- Update twitter badge due to depreciation

## [1.1.1] - 2023-01-22

### <!-- 02 -->Bug Fixes

- Improve regex rules for `mangle-css-class-webpack-plugin`

### <!-- 05 -->Documentation

- Add issue templates for bug report and feature requests

### <!-- 08 -->Miscellaneous Tasks

- Replace exact versions instead of carrot
- Change `save-prefix` from carrot to exact version
- Bump eslint from 8.31.0 to 8.32.0 
- Bump postcss from 8.4.20 to 8.4.21 
- Bump wrangler from 2.6.2 to 2.7.1 
- Bump next-sitemap from 3.1.44 to 3.1.45 

## [1.1.0] - 2023-01-16

### <!-- 01 -->Features

- Add `tailwind` class names obfuscation by `webpack`

### <!-- 04 -->Refactor

- Add missing `tw-` prefix for css classes
- Replace `classNames` functions by `clsx`

### <!-- 07 -->Continuous Integrations

- Change `open-pull-requests-limit` from 10 to 20

### <!-- 08 -->Miscellaneous Tasks

- Add `mangle-css-class-webpack-plugin` to dependencies
- Add `clsx` to dependencies

## [1.0.6] - 2023-01-14

### <!-- 07 -->Continuous Integrations

- Bump actions/cache from 3.0.11 to 3.2.3 
- Bump orhun/git-cliff-action from 2.0.2 to 2.0.3 

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 13.1.1 to 13.1.2 
- Bump eslint-config-next from 13.1.1 to 13.1.2 

## [1.0.5] - 2023-01-08

### <!-- 07 -->Continuous Integrations

- Bump orhun/git-cliff-action from 2.0.1 to 2.0.2 

## [1.0.4] - 2023-01-08

### <!-- 05 -->Documentation

- Add some status badges to the readme file

### <!-- 08 -->Miscellaneous Tasks

- Add a link to the github repository to the header

## [1.0.3] - 2023-01-08

### <!-- 07 -->Continuous Integrations

- Bump actions/checkout from 3.1.0 to 3.2.0 
- Bump actions/checkout from 3.2.0 to 3.3.0 
- Bump actions/setup-node from 3.5.1 to 3.6.0 

## [1.0.2] - 2023-01-04

### <!-- 08 -->Miscellaneous Tasks

- Update dependencies through `pnpm`

## [1.0.1] - 2023-01-04

### <!-- 05 -->Documentation

- Change the project license to`APLv2`

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/react-dom from 18.0.9 to 18.0.10 
- Bump eslint-config-next from 13.0.7 to 13.1.1 
- Bump next from 13.0.7 to 13.1.1 
- Bump @types/node from 18.11.17 to 18.11.18 
- Bump eslint from 8.30.0 to 8.31.0 

## [1.0.0] - 2023-01-02

### <!-- 02 -->Bug Fixes

- Migrate from `wagmi` version `8.x` to `9.x`

### <!-- 07 -->Continuous Integrations

- Bump actions/checkout from 3.1.0 to 3.2.0 
- Skip running `pnpm` workflow on ci dependencies
- Setup stale bot to closes abandoned issues
- Add a new `release` workflow to create releases

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 13.0.6 to 13.0.7 
- Bump @types/node from 18.11.11 to 18.11.13 
- Bump next from 13.0.6 to 13.0.7 
- Bump eslint from 8.29.0 to 8.30.0 
- Bump @types/node from 18.11.13 to 18.11.17 
- Bump wagmi from 0.8.10 to 0.9.2 

## [1.0.0-alpha.16] - 2022-12-10

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 13.0.4 to 13.0.5 
- Bump eslint-config-next from 13.0.4 to 13.0.5 
- Bump @types/node from 18.11.9 to 18.11.10 
- Bump @types/node from 18.11.10 to 18.11.11 
- Bump typescript from 4.9.3 to 4.9.4 
- Bump eslint-config-next from 13.0.4 to 13.0.6 
- Bump @types/react from 18.0.25 to 18.0.26 
- Bump next from 13.0.5 to 13.0.6 
- Bump eslint from 8.28.0 to 8.29.0 

## [1.0.0-alpha.15] - 2022-11-22

### <!-- 01 -->Features

- Add `useContractAbi` hook to retrieve contract abi
- Add ability to change chain based on environment
- Add `useAuctionState` hook to access auction state
- Implement settle and bid button functionality

### <!-- 02 -->Bug Fixes

- Solve json syntax error issue over `useTokenData`
- Solving some issues regard load of components
- Token abi for `useTokenData` hook

### <!-- 04 -->Refactor

- Move contract addresses to environment variables
- Improve preset options based on last auction
- Use new `useAuctionState` hook over auction components
- Remove extra provider and cleanup app
- Optimize imports and cleanup spaces

### <!-- 08 -->Miscellaneous Tasks

- Bump @rainbow-me/rainbowkit from 0.7.4 to 0.8.0 
- Update dependencies and lock file

## [1.0.0-alpha.14] - 2022-11-20

### <!-- 02 -->Bug Fixes

- Solve some linting warnings regarding contract fields

## [1.0.0-alpha.13] - 2022-11-20

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 13.0.3 to 13.0.4 
- Bump eslint-config-next from 13.0.3 to 13.0.4 
- Bump @types/react-dom from 18.0.8 to 18.0.9 
- Bump typescript from 4.8.4 to 4.9.3 
- Bump eslint from 8.27.0 to 8.28.0 
- Bump wagmi from 0.7.15 to 0.8.5 
- Specifiy node version of cloudflare pages

## [1.0.0-alpha.12] - 2022-11-13

### <!-- 04 -->Refactor

- Improve and optimize hooks imports

### <!-- 08 -->Miscellaneous Tasks

- Update `pnpm` lockfile state

## [1.0.0-alpha.11] - 2022-11-13

### <!-- 01 -->Features

- Add a customized wallet connect as login button
- Disable biding when auction is not active
- Add new hook for getting auction reserve price
- Add new hook for getting best bid for auction
- Add new hook for getting average bid for auction

### <!-- 02 -->Bug Fixes

- Enable login button over header component
- Solve api key envionmental variable type issues
- Solve react hydration error by adding `useIsMounted`

### <!-- 04 -->Refactor

- Create a separated component for display auction
- Change blockchain rpc providers priority
- Add `ankr` ro the app rpc providers
- Add `useAuction` hook to get latest auction
- Add `useLilNoun` hook to get lilnoun by token id
- Improve some of hooks and components
- Replace `Auction` component by `Panel`
- Update and improve all function components
- Improve auction ui and replace panel by auction
- Rename login components to connect components
- Split auction button to a separated component
- Improve strict types over hooks and components

### <!-- 05 -->Documentation

- Update and improve project readme file
- Update site description over index page

### <!-- 07 -->Continuous Integrations

- Add node version `19` to the `build` workflow
- Reorder some steps over `build` workflow
- Add `pnpm` workflow to patch updated lock files
- Solve an issue on `pnpm` workflow push step

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.11.6 to 18.11.7
- Bump @types/react-dom from 18.0.7 to 18.0.8
- Bump @types/react from 18.0.23 to 18.0.24
- Add `wagmi:0.7.7` to dependencies
- Add `ethers:5.7.2` to dependencies
- Add `@rainbow-me/rainbowkit:0.7.4` to dependencies
- Bump @types/node from 18.11.7 to 18.11.9
- Bump eslint-config-next from 13.0.0 to 13.0.1 
- Bump next from 13.0.0 to 13.0.1 
- Add a json reference file for lilnouns token contract
- Add a json reference file for lilnouns auction contract
- Add `react-use:17.4.0` to dependencies
- Add `tilg:0.1.1` to dependencies
- Bump next from 13.0.1 to 13.0.2 
- Bump eslint-config-next from 13.0.1 to 13.0.2 
- Bump @types/react from 18.0.24 to 18.0.25 
- Bump wagmi from 0.7.15 to 0.8.1 
- Bump eslint from 8.26.0 to 8.27.0 
- Update `pnpm` lockfile state
- Bump next from 13.0.2 to 13.0.3 
- Bump eslint-config-next from 13.0.2 to 13.0.3 
- Add `dayjs:1.11.6` to dependencies
- Add `urql` and `graphql` to dependencies

## [1.0.0-alpha.10] - 2022-10-26

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 12.3.1 to 13.0.0
- Bump @types/node from 18.11.5 to 18.11.6
- Bump eslint-config-next from 12.3.1 to 13.0.0

## [1.0.0-alpha.9] - 2022-10-26

### <!-- 01 -->Features

- Improve index by adding base structure and components

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.11.4 to 18.11.5
- Bump @types/react-dom from 18.0.6 to 18.0.7
- Bump @types/react from 18.0.21 to 18.0.23
- Update `pnpm` lockfile state
- Add `@heroicons/react:2.0.12` to dependencies
- Add `@headlessui/react:1.7.3` to dependencies

## [1.0.0-alpha.8] - 2022-10-24

### <!-- 04 -->Refactor

- Add a middleware to the page functions to proxy main api requests
- Migrate to typescript and update based on template

### <!-- 07 -->Continuous Integrations

- Bump actions/checkout from 3.0.2 to 3.1.0
- Bump actions/cache from 3.0.8 to 3.0.11
- Bump actions/setup-node from 3.4.1 to 3.5.1
- Bump pnpm/action-setup from 2.2.2 to 2.2.4
- Add node version `18` to the `build` workflow
- Add missing environmental variables for `build` workflow
- Patch `set-output` on `build` workflow

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.23.1 to 8.26.0
- Update `pnpm` lockfile state
- Update ignored files over project root

## [1.0.0-alpha.7] - 2022-09-21

### <!-- 07 -->Continuous Integrations

- Bump pnpm/action-setup from 2.0.1 to 2.2.2

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 12.3.0 to 12.3.1
- Bump next from 12.3.0 to 12.3.1
- Bump eslint from 8.23.0 to 8.23.1

## [1.0.0-alpha.6] - 2022-09-09

### <!-- 08 -->Miscellaneous Tasks

- Update some of npm configs through npmrc file

## [1.0.0-alpha.5] - 2022-09-09

### <!-- 07 -->Continuous Integrations

- Solve pnpm to fail on peer dependency issues on `build` workflow

## [1.0.0-alpha.4] - 2022-09-09

### <!-- 07 -->Continuous Integrations

- Improve the `build` workflow and add cache

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint-config-next from 12.2.5 to 12.3.0
- Bump next from 12.2.5 to 12.3.0
- Bump eslint from 8.22.0 to 8.23.0

## [1.0.0-alpha.3] - 2022-08-29

### <!-- 04 -->Refactor

- Add some text to the main index

## [1.0.0-alpha.2] - 2022-08-29

### <!-- 05 -->Documentation

- Cleanup the project readme file

### <!-- 08 -->Miscellaneous Tasks

- Replace default favicon by a nouns favicon

## [1.0.0-alpha.1] - 2022-08-19

### <!-- 07 -->Continuous Integrations

- Replace `yarn` by `pnpm` over `build` workflow

## [1.0.0-alpha.0] - 2022-08-19

### <!-- 04 -->Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default font

### <!-- 07 -->Continuous Integrations

- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs

### <!-- 08 -->Miscellaneous Tasks

- Create new next project using creator
- Add `export` to the package scripts
- Configure `unoptimized` in next configs
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Install and initialize tailwind css
- Add a new editorconfig file

<!-- generated by git-cliff -->
