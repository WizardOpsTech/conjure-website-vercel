<h1>
  <p align="center">
    <img src="./public/images/conjure-logo-white.svg" alt="Logo" width="128">
    <br>Conjure Website
  </p>
</h1>
<p align="center">
  This repository contains the entire source for the Conjure website.
</p>

## Local Development

To spin up a local server, you can simply run `make`.

```bash
make
```

Open [http://localhost:3000](http://localhost:3000) with your browser
to view the website.

## Tracking new Conjure Releases

When new releases are updated edit the following:
- `conjure-website-vercel/src/lib/fetch-latest-conjure-version.ts`. This is where downloads takes its versions from.
- `conjure-website-vercel/docs/install/release-notes`. Add a new mdx file for the version and update index.

## Contributing

If you would like to contribute to the website, please read the
[contributing guidelines](CONTRIBUTING.md).
