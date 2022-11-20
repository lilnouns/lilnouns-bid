# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-alpha.14] - 2022-11-20

### <!-- 02 -->Bug Fixes

- Solve some linting warnings regarding contract fields

## [1.0.0-alpha.13] - 2022-11-20

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 13.0.3 to 13.0.4 ([#43](https://github.com/orhun/git-cliff/issues/43))
- Bump eslint-config-next from 13.0.3 to 13.0.4 ([#44](https://github.com/orhun/git-cliff/issues/44))
- Bump @types/react-dom from 18.0.8 to 18.0.9 ([#41](https://github.com/orhun/git-cliff/issues/41))
- Bump typescript from 4.8.4 to 4.9.3 ([#42](https://github.com/orhun/git-cliff/issues/42))
- Bump eslint from 8.27.0 to 8.28.0 ([#45](https://github.com/orhun/git-cliff/issues/45))
- Bump wagmi from 0.7.15 to 0.8.5 ([#46](https://github.com/orhun/git-cliff/issues/46))
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
- Bump eslint-config-next from 13.0.0 to 13.0.1 ([#31](https://github.com/orhun/git-cliff/issues/31))
- Bump next from 13.0.0 to 13.0.1 ([#32](https://github.com/orhun/git-cliff/issues/32))
- Add a json reference file for lilnouns token contract
- Add a json reference file for lilnouns auction contract
- Add `react-use:17.4.0` to dependencies
- Add `tilg:0.1.1` to dependencies
- Bump next from 13.0.1 to 13.0.2 ([#33](https://github.com/orhun/git-cliff/issues/33))
- Bump eslint-config-next from 13.0.1 to 13.0.2 ([#34](https://github.com/orhun/git-cliff/issues/34))
- Bump @types/react from 18.0.24 to 18.0.25 ([#35](https://github.com/orhun/git-cliff/issues/35))
- Bump wagmi from 0.7.15 to 0.8.1 ([#37](https://github.com/orhun/git-cliff/issues/37))
- Bump eslint from 8.26.0 to 8.27.0 ([#36](https://github.com/orhun/git-cliff/issues/36))
- Update `pnpm` lockfile state
- Bump next from 13.0.2 to 13.0.3 ([#38](https://github.com/orhun/git-cliff/issues/38))
- Bump eslint-config-next from 13.0.2 to 13.0.3 ([#39](https://github.com/orhun/git-cliff/issues/39))
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
