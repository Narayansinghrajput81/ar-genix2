This project is a full-stack assessment that includes a high-performance React dashboard, a secure Node.js backend API, and an optimized database schema.
The focus is on performance, scalability, and security while handling high-frequency data.

 Frontend (React.js)
Task

Build a high-frequency data monitoring dashboard capable of rendering 5,000+ records smoothly without UI lag.

Implementation

Implemented a virtualized list to efficiently render large datasets.

Used React.memo, useCallback, and useMemo to prevent unnecessary re-renders.

State management is optimized to update only affected components.

Simulated high-frequency data updates to test UI performance.

Performance Focus

Minimal DOM nodes using virtualization.

Controlled state updates to avoid re-render storms.

Smooth scrolling even with large data volume.

 Backend (Node.js)
Task

Develop a secure API to handle asynchronous data processing.

Implementation

Built a custom Rate Limiter middleware from scratch (without third-party libraries) using in-memory storage.

Implemented a Request Validator middleware to validate request payloads and handle edge cases.

Asynchronous request handling with proper error management.

Security & Reliability

Rate limiting to prevent API abuse.

Input validation to block malformed or malicious requests.

Centralized error handling for consistent API responses.
