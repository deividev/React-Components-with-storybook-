Vite + React + TypeScript + Sass + Storybook + Jest Project
This project is a template for creating web applications using Vite, React, TypeScript, Sass, Storybook, and Jest.

Requirements
Before starting to use this project, make sure you have Node.js installed on your machine.

Installation
To install the project dependencies, run the following command at the root of the project:
yarn install

Execution
To run the application, run the following command:
yarn dev

This will start the development server at http://localhost:3000.

Compilation
To compile the application, run the following command:
yarn build

This will generate a dist folder with the compiled files ready to be deployed to production.

Storybook
To run Storybook, run the following command:
yarn storybook

This will start the Storybook server at http://localhost:6006.

Jest
To run unit tests with Jest, run the following command:
yarn test

Technologies used
Vite
React
TypeScript
Sass
Storybook
Jest
File structure
lua
Copy code
|-- src
| |--styles
| | |--abstract
| | |--base
| | |--components
| | |--config
| | |--layout
| | |--theme
| | |--variables
| | |--mains.scss
| |-- components
| | |-- Component.tsx
| | |-- __test__
| | | |--Component.test.tsx
| | |-- Component.module.scss
|-- .storybook
| |-- main.tsx
|-- vite.config.ts
|-- package.json
|-- tsconfig.json
|-- jest.config.js
|-- README.md


src/components: Folder where the application components are located.
src/styles: Folder where the application styles are located.
src/main.tsx: Entry point of the application.
.storybook/main.js: Main configuration of Storybook.
.storybook/preview.js: Configuration of the Storybook environment.
vite.config.ts: Vite configuration.
package.json: npm configuration file.
tsconfig.json: TypeScript configuration.
jest.config.js: Jest configuration.
README.md: The file you are currently reading.
Contributing
If you would like to contribute to this project, you can do so through Pull Requests or Issues on GitHub.

License
This project is licensed under the MIT License. See the LICENSE file for more information.