# Application Manager for Stable Diffusion Runpod Template

A lightweight Node.js web UI for starting and stopping the AI applications
that ship with my Stable Diffusion Runpod templates. It exposes a simple
table of Start/Stop buttons that shell out to the matching scripts in
`scripts/`.

## Supported applications

- A1111 (Stable Diffusion web UI)
- Kohya_ss
- ComfyUI
- InvokeAI
- TTS WebUI

Which rows show up in the UI is controlled by `public/config.json`, so
templates that don't ship every app can hide the ones they don't need.

## Requirements

- Node.js 18 or newer
- The matching `start_*.sh` / `stop_*.sh` scripts present in `scripts/`

## Install

```bash
npm install
```

## Run

```bash
npm start
```

The server listens on `0.0.0.0:8000`. On Runpod, expose port `8000` and
open the pod's HTTP proxy URL to reach the UI.

## Configuration

Edit `public/config.json` to control which applications appear in the
table:

```json
{
  "applications": [
    "A1111",
    "Kohya_ss",
    "ComfyUI",
    "InvokeAI"
  ]
}
```

Valid values are `A1111`, `Kohya_ss`, `ComfyUI`, `InvokeAI`, and
`TTS_WebUI`. Rows for applications not listed here are hidden on page
load.

## HTTP endpoints

Each application has a start and a stop endpoint that fires the
corresponding shell script in the background:

| Application | Start              | Stop              |
| ----------- | ------------------ | ----------------- |
| A1111       | `GET /start_a1111` | `GET /stop_a1111` |
| Kohya_ss    | `GET /start_kohya` | `GET /stop_kohya` |
| ComfyUI    | `GET /start_comfyui` | `GET /stop_comfyui` |
| InvokeAI    | `GET /start_invokeai` | `GET /stop_invokeai` |
| TTS WebUI   | `GET /start_tts`   | `GET /stop_tts`   |

## License

GPL-3.0. See [LICENSE](LICENSE).
