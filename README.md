<h1 align="center">ETMobile</h1>
<p align="center">A simple mobile interface for the Energy Transition Model.</p>

<p align="center">
  <a href="https://travis-ci.org/quintel/etmobile"><img alt="Master branch build status" src="https://img.shields.io/travis/quintel/etmobile/master.svg" /></a>

  <a href="https://codecov.io/gh/quintel/etmobile"><img alt="Code coverage status" src="https://img.shields.io/codecov/c/github/quintel/etmobile/master.svg" /></a>
</p>

## Quick start guide

1. The development version of ETMobile requires that you have Node.js installed.
   macOS users with [Homebrew][homebrew] can install Node.js easily:

   ```sh
   brew update
   brew install node
   ```

   If you already have Node.js installed, please check the version by running
   `node -v`; version 6 or newer is required. Older versions may be updated by
   running:

   ```sh
   brew update
   brew upgrade node
   ```

2. Install [Yarn][yarn]:

   ```sh
   npm install yarn -g
   ```

3. Finally, using Yarn, install the ETMobile dependencies:

   ```sh
   yarn
   ```

   You may re-run this command in the future to install any new or updated
   dependencies (which will show up as "Module not found: ...") error messages
   in the application.

You may now run the development version of ETMobile with `npm start`. The tests
can be performed with `npm test` and `npm run coverage`.

Developers may refer to the [Create React App documentation][cra].

[homebrew]: http://brew.sh
[yarn]: https://yarnpkg.com
[cra]: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
