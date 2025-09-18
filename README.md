# Admin Wizard

<a alt="Angular logo" href="https://angular.dev" target="_blank" rel="noreferrer"><img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" width="120"></a>

Admin Wizard is a modern [Angular](https://github.com/angular/angular-cli) application built with the latest technologies and best practices. This project provides a multi-step form (wizard) interface for collecting administrative data (e.g., personal, address, and professional information).

## Tech Stack

- **Framework**: Angular 20 with SSR/SSG support
- **Monorepo**: Nx v21.5.2 (integrated)
- **Bundler**: esbuild
- **Styling**: SCSS
- **Testing**: Jest (unit) + Cypress (e2e)
<!-- - **CI/CD**: Azure DevOps -->


## Getting Started

### Development Server
```sh
npx nx serve admin-wizard
```

### Build
```sh
npx nx build admin-wizard
```

### Testing
```sh
# Unit tests
npx nx test admin-wizard

# E2E tests
npx nx e2e admin-wizard-e2e
```

### Linting
```sh
npx nx lint admin-wizard
```

## Project Structure

This is an integrated Nx monorepo with the following structure:

```
admin-wizard/
├── apps/
│   └── admin-wizard/          # Main Angular application
├── libs/                      # Shared libraries (when created)
└── tools/                     # Build tools and scripts
```

## Features

- Server-Side Rendering (SSR) and Static Site Generation (SSG)
- Modern Angular with standalone components
- SCSS styling with responsive design
- Comprehensive testing setup
<!-- - Azure DevOps CI/CD integration -->

## Development Tools

### Nx Console
Install [Nx Console](https://nx.dev/getting-started/editor-setup) for VSCode or IntelliJ to enhance your development experience with visual task running and code generation.

### Nx Graph
Visualize your project dependencies:
```sh
npx nx graph
```

## Resources

- [Angular Documentation](https://angular.dev)
<!-- - [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) -->
