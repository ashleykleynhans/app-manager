# Changelog

All notable changes to this project are documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-05-23

### Changed
- Complete UI redesign in a cassette-futurism / mission-control aesthetic
  (amber + phosphor-green palette, VT323 + IBM Plex Mono typography, CRT
  scanlines, grid, and vignette atmosphere).
- Replaced the per-app table rows with self-contained module cards that
  show a module id, live status pill, and colored left-border state
  indicator.
- Replaced `alert()` popups with a timestamped, in-page event log that
  shows the latest server responses.
- Rewrote the frontend in vanilla JS using `fetch` and event delegation.

### Added
- UTC clock and session-status indicator in the header.
- Per-module state machine: IDLE / STARTING / ONLINE / STOPPING /
  OFFLINE / ERROR, with pulsing status dots and matching border accent.
- Staggered entrance animation and motion-aware hover states; honors
  `prefers-reduced-motion`.

### Removed
- Bootstrap 4 and jQuery / jQuery UI CDN dependencies. The frontend now
  ships with no external runtime JS.
- The unused ocean-theme background image.

## [1.3.2] - 2026-05-23

### Changed
- Bumped `qs`, `path-to-regexp`, and `express` to address Dependabot
  advisories.

### Added
- Expanded `README.md` with installation, configuration, and HTTP
  endpoint documentation.

## [1.3.1] - 2026-01-01

### Changed
- Bumped `qs` and `express`.

## [1.3.0] - 2025-10-14

### Added
- Support for TTS WebUI.
