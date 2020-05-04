# Typescript Node project Template

This is a template project to be used at initial project setup for typescript.

The following technology stack is setup:

- `eslint-typescript`: Linter
- `yarn`: Package manager
- `nodemon`: Automation on file changes
- `ts-node`: Development run
- `rimraf`: Project clean-up
- `tsc`: Type checking and declaration output
- `babel` with `preset-typescript`: Production compile
- `dotenv`: Environment variables

The following project structure is setup:

- `src`: Source files
  - `main.ts`: Entrypoint file
- `dist`: Production build files targeting `node 10.0`

Editor setup:

- `airbnb`: Style
- `spaces`: Identation
- `2`: Identation Size
- `LF`: EOL

Yarn commands:

- `start`: Initialize project on development mode using port 5858 for debugging
- `start:watch`: Run development mode with nodemon watching on src folder
- `start:prod`: Run type checking, build production code and run from dist folder
- `start:clean:prod`: Clean content of dist folder before checking, compiling and running production code
- `start:prod:watch`: Run production mode with nodemon watching on src
- `type-check`: Only verify checking and typescript code
- `type-check:watch`: Verify checking and typescript code watching for changes on src
- `build`: Compile production code on dist folder
- `build:clean`: Clean content of dist folder before compiling production code
- `build:watch`: Run production code compilation watching for changes on src
- `build:types`: Compile only declaration types (`.d.ts`)
- `build:js`: Compile only javascript files from typescript files (no declaration types are generated)
- `clean:dist`: Clean content of dist folder

Elements to change on project setup

- `.env`:
  - `PROJECT_NAME`: setup your project name for access on source files
- `package.json`:
  - `name`: setup your project name for npm and yarn
  - `description`: change your project description

Initialize project:

1. `yarn` : Download packages
2. `git init` : Reinitialize project git repository
