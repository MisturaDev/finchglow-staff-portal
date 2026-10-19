# Architectural Decision Log: Finchglow Staff Portal

**Candidate:** Mistura Ishola  
**Project:** Finchglow Holdings Group Staff Portal  
**Date:** October 2026

## Trade-off 1: CSS Custom Properties vs. a UI Component Library

**Context:** The portal needs to support distinct branding across six subsidiaries and the Group view, while remaining responsive, accessible, and lightweight.

**Options considered:**
- **UI component library:** Libraries such as MUI offer reusable components but introduce additional dependencies and may require customisation to support the branding requirements.
- **Tailwind CSS:** Provides a utility-first styling approach, but dynamic company branding would still require a strategy for managing theme values.
- **Native CSS custom properties (chosen):** Provides reusable theme tokens that can be updated when the selected company changes.

**Decision and impact:** I chose native CSS custom properties, using tokens such as `--accent`, `--accent-dark`, and `--accent-soft`. This keeps the branding logic separate from individual component styles and supports dynamic theme changes without duplicating entire dashboards. The reported production build contains approximately **81.60 kB of gzipped assets**, keeping the implementation lightweight.

## Trade-off 2: React State vs. an External State Management Library

**Context:** The portal manages company selection, employee personas, search queries, category filters, role shortcuts, and alert interactions.

**Options considered:**
- **Redux Toolkit or Zustand:** Offers additional tools for managing shared state and more complex application workflows.
- **React state and memoization (chosen):** Uses React's built-in state management and `useMemo` where derived values benefit from memoization.

**Decision and impact:** I chose React's built-in state primitives because the assessment's scope did not justify introducing another state management dependency. This keeps the implementation straightforward and makes the flow of state easier to follow. If the application grows to include more complex workflows or extensive shared state, I would reassess whether an external library would provide meaningful benefits.

## Trade-off 3: Typed Mock Data vs. Network Mocking

**Context:** The assessment requires realistic application, company, employee, and alert data, along with loading and error states, without requiring a real backend.

**Options considered:**
- **Mock Service Worker (MSW) or a local mock API:** Simulates network requests and responses, allowing more realistic API integration and failure testing.
- **Typed TypeScript configuration modules (chosen):** Keeps mock data in dedicated modules and uses simulated interface states to demonstrate loading and error handling.

**Decision and impact:** I chose typed mock data because it meets the assessment's requirements without adding network-mocking infrastructure that was unnecessary for the prototype's scope. The defined TypeScript contracts improve consistency across the data layer, while the modular configuration makes the portal easier to extend. A production implementation could replace the mock data with API services and introduce network-level testing as needed.
