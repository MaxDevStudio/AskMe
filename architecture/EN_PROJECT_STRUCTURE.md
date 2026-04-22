# "AskMe" Project Architecture and Structure

This document describes the current and planned file structure of the project, as well as key architectural decisions.

## 1. Current Structure (v1.x)

At the current stage, the project is a simple CLI tool with its core logic in executable files. This allows for quick execution of commands directly from the terminal.

```bash
AskMe/
├── architecture/
│   ├── EN_PROJECT_STRUCTURE.md
│   └── UA_PROJECT_STRUCTURE.md
├── bin/
│   ├── ask.js              # < Main script for AI queries
│   └── list-models.js      # < Utility to list available models
├── docs/
│   ├── en/
│   ├── ua/
│   ├── VISION_EN.md
│   └── VISION_UA.md
├── scripts/
│   ├── hello-system.sh
│   └── status.sh
├── .env                    # < API keys and configuration
├── .gitignore
├── package.json
└── README.md
```

## 2. Planned Structure (v2.x - with GUI and API)

In the future, the project is planned to be expanded into a full-fledged application with a web interface (GUI) and a REST API for management. This will require refactoring and a transition to a more modular structure.

The main idea is to extract the core logic (interaction with the AI) into a separate module that will be used by both the CLI and the API.

```bash
AskMe/
├── architecture/
│   └── ... (architecture documentation)
├── docs/
│   └── ... (project documentation)
├── public/                 # < Static files for the web interface (GUI)
│   ├── index.html
│   ├── styles.css
│   └── main.js
├── src/                    # < Main source code
│   ├── cli/
│   │   └── index.js        # < Entry point for the CLI (replaces /bin/ask.js)
│   ├── api/
│   │   ├── server.js       # < Main API file (Express/Fastify)
│   │   └── routes.js       # < API routes (/api/ask, /api/status)
│   └── core/
│       └── gemini.js       # < Isolated module for interacting with the Gemini API
├── scripts/
│   └── ... (helper scripts)
├── .env
├── package.json
└── index.js                # < Main entry point (starts the API server)
```

### Key Changes and Rationale:

1.  **`src` Directory:** All main source code is moved here. This is a standard practice that separates source code from configuration, documentation, and other files.
2.  **`src/core/gemini.js` Module:** The logic for interacting with the Gemini API is extracted into a separate, reusable module. This will allow both the CLI (`src/cli/index.js`) and the API (`src/api/server.js`) to use the same functionality, avoiding code duplication.
3.  **Separation of `cli`, `api`, `public`:**
    *   `src/cli`: Code responsible exclusively for terminal operations.
    *   `src/api`: Code for the REST API, which will be the foundation for the web interface and potential integration with other services.
    *   `public`: Frontend files (HTML, CSS, client-side JS) for a simple GUI.
4.  **Main `index.js` File:** Instead of multiple entry points in `bin/`, there will be a single main file that, for example, starts the web server. CLI commands will be configured in the `bin` section of `package.json`.

This structure is more scalable and prepared for the future development of the project as an "orchestrator."