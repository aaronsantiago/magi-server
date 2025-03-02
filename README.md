# 3suite

this repository serves as a template for 3suite projects. as of writing, it includes:

- 3lib-config setup
- workflow actions for automated building and releasing via tags

## usage

### creating a new project

fork the repository--any changes that we make to the build workflows should be merged upstream to this template.

builds will automatically be triggered on push.

### creating a release

ensure that you are in a fully committed state before creating a tag.
you likely want to download and check the related build before tagging.

create a tag:

`git tag -a v1.0.0 -m "release v1.0.0"`

the message inside of the quotes will be the release message.
the version number will be appended to the output build files.

### macOS builds

we currently do not support notarization for macOS builds.
to run mac builds, flag them as safe for gatekeeper with the following command:

`xattr -c <path_to_mac_executable>`
