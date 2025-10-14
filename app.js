const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/stop_a1111', (req, res) => {
    exec('scripts/stop_a1111.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping A1111: ${error}`);
        }
    });

    res.send('Stopped A1111 successfully!');
});

app.get('/start_a1111', (req, res) => {
    exec('scripts/start_a1111.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting A1111: ${error}`);
        }
    });

    res.send('Started A1111 successfully!');
});

app.get('/stop_kohya', (req, res) => {
    exec('scripts/stop_kohya.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping Kohya_ss: ${error}`);
        }
    });

    res.send('Stopped Kohya_ss successfully!');
});

app.get('/start_kohya', (req, res) => {
    exec('scripts/start_kohya.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Kohya_ss: ${error}`);
        }
    });

    res.send('Started Kohya_ss successfully!');
});

app.get('/stop_comfyui', (req, res) => {
    exec('scripts/stop_comfyui.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping ComfyUI: ${error}`);
        }
    });

    res.send('Stopped ComfyUI successfully!');
});

app.get('/start_comfyui', (req, res) => {
    exec('scripts/start_comfyui.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting ComfyUI: ${error}`);
        }
    });

    res.send('Started ComfyUI successfully!');
});

app.get('/stop_invokeai', (req, res) => {
    exec('scripts/stop_invokeai.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping InvokeAI: ${error}`);
        }
    });

    res.send('Stopped InvokeAI successfully!');
});

app.get('/start_invokeai', (req, res) => {
    exec('scripts/start_invokeai.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting InvokeAI: ${error}`);
        }
    });

    res.send('Started InvokeAI successfully!');
});

app.get('/stop_tts', (req, res) => {
    exec('scripts/stop_tts.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping TTS WebUI: ${error}`);
        }
    });

    res.send('Stopped TTS WebUI successfully!');
});

app.get('/start_tts', (req, res) => {
    exec('scripts/start_tts.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting TTS WebUI: ${error}`);
        }
    });

    res.send('Started TTS WebUI successfully!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
