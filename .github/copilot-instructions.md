# Copilot Instructions for Test_Automation_CCN_Web_Serenity

## Project Overview
This is a Playwright + Serenity/JS + Cucumber + TypeScript test automation project for web UI testing. The architecture is modular, following the Screenplay pattern with clear separation of Page Objects, Tasks, Questions, and Step Definitions.

## Key Directories & Files
- `src/PageObject/`: Page objects, selectors, and UI element definitions.
- `src/Tasks/`: Task classes encapsulate user actions (e.g., `RegisterUser.ts`).
- `src/Questions/`: Custom questions for assertions and state checks.
- `src/StepDefinitions/`: Cucumber step definitions, using Serenity/JS actor and abilities.
- `src/support/world.ts`: CustomWorld setup, browser/context/page/actor lifecycle hooks.
- `src/Resource/features/`: Gherkin feature files for scenarios.
- `package.json`: Scripts for running tests and generating reports.
- `.github/workflows/serenity-report.yml`: CI workflow for running tests and publishing Serenity reports to GitHub Pages.

## Developer Workflows
- **Run tests locally:**
  ```powershell
  npx cucumber-js --require-module ts-node/register --require src/support/world.ts --require src/StepDefinitions/**/*.ts src/Resource/features/**/*.feature --format @serenity-js/cucumber
  ```
- **Generate Serenity report locally:**
  ```powershell
  npx serenity-bdd run
  ```
- **CI/CD:**
  - Workflow runs tests, generates Serenity JSON, builds HTML report, and publishes to GitHub Pages.
  - Report is available at: `https://<owner>.github.io/<repo>/`

## Patterns & Conventions
- **Screenplay Pattern:**
  - Use `Task.where` for user actions, never call `actor.attemptsTo` inside a Task.
  - Use `Question.about` for assertions and state checks.
  - All selectors should be unique and robust for Playwright strict mode.
- **Assertions:**
  - Use `Ensure.that` from `@serenity-js/assertions` for all verifications.
  - Prefer explicit waits (`Wait.until(element, isVisible())`) for element visibility before actions.
- **World Setup:**
  - `src/support/world.ts` manages browser/context/page/actor lifecycle using Cucumber hooks.
  - Always launch browser in headless mode for CI (`headless: true`).
- **Reporting:**
  - Tests must use the Serenity/JS Cucumber formatter to generate JSON results for the report.
  - CI workflow uses Java 17 for Serenity-BDD compatibility.

## Integration Points
- **Playwright:** Used for browser automation via Serenity/JS abilities.
- **Serenity/JS:** Provides Screenplay pattern, assertions, reporting, and integration with Cucumber.
- **Cucumber:** Gherkin scenarios and step definitions.
- **GitHub Actions:** Automated test runs and report publishing.

## Examples
- See `src/Tasks/RegisterUser.ts` for Task pattern.
- See `src/Questions/ReviweRegistrationSuccess.ts` for custom Question.
- See `src/StepDefinitions/registration.steps.ts` for step definition usage.

## Troubleshooting
- If Serenity report shows 0 tests, ensure tests are run with the correct formatter and JSON files are generated in `target/site/serenity`.
- For CI failures, check Java version and Playwright headless mode settings.

---
_If any section is unclear or missing important project-specific details, please provide feedback to improve these instructions._
