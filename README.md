
# Finchglow Holdings Group Staff Portal

> 🌐 **Live Demo:** [https://finchglow-staff-portal.vercel.app/](https://finchglow-staff-portal.vercel.app/)

A responsive, multi-company staff portal designed for Finchglow Holdings. The application brings employee tools, operational alerts, company-specific branding, and role-based shortcuts into one unified workspace.

Built as a frontend engineering assessment using React, TypeScript, and Vite, with local mock data and a configuration-driven architecture.

## Overview

The portal provides a unified workspace for employees across Finchglow Holdings and its six subsidiaries. Staff can switch between company workspaces, access relevant applications, search for tools, view operational announcements, and use shortcuts tailored to their roles.

The application uses mock data to demonstrate the core experience without requiring a live backend or authentication service.

## Key Features

### Dynamic Company Branding

- Switch between the Group workspace and six subsidiary workspaces.
- Apply company-specific branding through configurable theme properties.
- Maintain a consistent interface across company views.
- Support adding new subsidiaries through configuration and data updates.

### Interactive Dashboard

- Display application shortcuts in a responsive launcher.
- Search applications by name, description, category, and tags.
- Filter applications by category.
- Display operational alerts and company announcements.
- Highlight critical incidents with a prominent alert banner.
- Provide loading, error, retry, and empty-result states.
- Display network connectivity status.

### Role-Based Views

- Switch between five demonstration employee personas.
- Display role-specific application shortcuts.
- Filter applications based on the selected role.
- Synchronise employee identity, greeting, and company theme with the selected persona.

### Accessibility and Responsive Design

- Provide a skip-to-main-content link.
- Use visible keyboard focus indicators.
- Support keyboard interaction for key controls.
- Use accessible labels and appropriate ARIA attributes for important interface elements.
- Adapt the layout to different screen sizes.

## Technology Stack

- React 19
- TypeScript
- Vite
- CSS
- Vitest
- React Testing Library

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/MisturaDev/finchglow-staff-portal.git
```

Navigate to the project directory:

```bash
cd finchglow-staff-portal
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Run Tests

```bash
npm test
```

### Create a Production Build

```bash
npm run build
```

### Run Linting

```bash
npm run lint
```

## Testing

The project includes automated tests using Vitest and React Testing Library.

The current test suite contains 10 tests across three test files, covering:

- Company-specific application filtering and the persistence of group-wide announcements across subsidiary views.
- Critical alert accessibility attributes and dismissal behaviour.
- Application search, clearing search results, category filtering, and role shortcut controls.

The tests help verify key dashboard behaviours and reduce the risk of regressions during development.

Run the test suite using `npm test`.

## Performance

The production build was reviewed using Vite's build output.

| Asset | Raw Size | Gzipped Size |
|---|---:|---:|
| JavaScript | 249.36 kB | 77.53 kB |
| CSS | 16.25 kB | 3.77 kB |
| HTML | 0.47 kB | 0.30 kB |
| **Total** | **266.08 kB** | **81.60 kB** |

**Reported production build time:** 1.33 seconds.

These figures represent the reported build output and may vary between builds or environments.

## Project Structure

The project uses a modular architecture that separates UI components, configuration, mock data, shared types, and automated tests.

```text
src/
├── __tests__/
│   ├── CompanyFilter.test.ts
│   ├── CriticalAlert.test.tsx
│   └── SearchBar.test.tsx
├── components/
│   ├── common/
│   ├── AppLauncher/
│   ├── CompanySwitcher/
│   ├── CriticalAlert/
│   ├── NetworkStatus/
│   ├── NewsFeed/
│   ├── RoleShortcuts/
│   ├── RoleSwitcher/
│   └── SearchBar/
├── data/
│   ├── alerts.ts
│   ├── apps.ts
│   ├── companies.ts
│   ├── employees.ts
│   ├── roles.ts
│   └── index.ts
├── test/
│   └── setup.ts
├── types/
│   └── portal.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx

public/
├── favicon.svg
└── icons.svg

DECISION_LOG.md
README.md
package.json
vite.config.ts
```

### Architecture Highlights

- **Components:** Feature-based folders keep dashboard elements modular and maintainable.
- **Data:** Centralised mock data and configuration files support company switching, application filtering, alerts, and role-based views.
- **Types:** Shared TypeScript contracts define the portal's core entities.
- **Testing:** Automated tests cover company filtering, critical alerts, search, categories, and role shortcut controls.
- **Styling:** Global styles, application layout styles, and component-specific CSS organise the presentation.
- **Documentation:** This README explains setup and architecture, while `DECISION_LOG.md` records key engineering trade-offs.

## Adding a New Subsidiary

The portal uses configuration-driven company branding and mock data to simplify the addition of new subsidiaries.

To add another subsidiary:

1. Add its company configuration in `src/data/companies.ts`, including its identifier, display name, branding properties, and logo mark.
2. Add any company-specific applications and alerts to the relevant data files.
3. Update related types or filtering logic if required.
4. Run the test suite and production build to verify the changes.

This approach keeps company-specific configuration separate from shared dashboard components.

## Authentication and SSO

The current implementation uses local mock data and demonstration personas. It does not implement production authentication or single sign-on (SSO).

For a production deployment, the portal could integrate with the organisation's identity provider using an approved authentication protocol, such as OpenID Connect. Access to applications and employee information should be enforced by a trusted backend rather than relying solely on client-side role filtering.

## Accessibility Considerations

Accessibility has been considered throughout the interface.

| Area | Implementation |
|---|---|
| Keyboard navigation | Keyboard support for key interactive controls |
| Focus visibility | Visible focus indicators |
| Page navigation | Skip-to-main-content link |
| Critical alerts | Appropriate alert semantics and live-region attributes |
| Responsive layout | Layout adapts to different screen sizes |

These are implemented accessibility measures. The project has not been presented as formally certified against a complete WCAG conformance audit.

## Engineering Decisions

Key implementation trade-offs are documented in `DECISION_LOG.md`, including:

- CSS custom properties for dynamic branding instead of introducing a large UI library.
- React state for local interface interactions rather than adding unnecessary global state management.
- Typed mock data to keep the demonstration simple while maintaining clear data contracts.

These decisions aim to balance maintainability, performance, implementation complexity, and the scope of the assessment.

## Future Improvements

Potential next steps for a production-ready version include:

- Integrating live APIs and persistent data.
- Implementing secure SSO and backend-enforced permissions.
- Expanding automated test coverage and adding end-to-end tests.
- Introducing monitoring and error reporting.
- Conducting a complete accessibility audit.
