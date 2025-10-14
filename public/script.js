$(document).ready(function() {
    $.getJSON("/config.json", function(config) {
        // Initially hide all rows
        $("tbody tr").hide();

        // Iterate over the applications in the config
        config.applications.forEach(function(app) {
            // Construct the row's ID and show it
            $("#row" + app).show();
        });
    });

    $('#stopA111').click(function () {
        $.get('/stop_a1111', function (data) {
            alert(data);
        });
    });

    $('#startA111').click(function () {
        $.get('/start_a1111', function (data) {
            alert(data);
        });
    });

    $('#stopKohya').click(function () {
        $.get('/stop_kohya', function (data) {
            alert(data);
        });
    });

    $('#startKohya').click(function () {
        $.get('/start_kohya', function (data) {
            alert(data);
        });
    });

    $('#stopComfyUI').click(function () {
        $.get('/stop_comfyui', function (data) {
            alert(data);
        });
    });

    $('#startComfyUI').click(function () {
        $.get('/start_comfyui', function (data) {
            alert(data);
        });
    });

    $('#stopInvokeAI').click(function () {
        $.get('/stop_invokeai', function (data) {
            alert(data);
        });
    });

    $('#startInvokeAI').click(function () {
        $.get('/start_invokeai', function (data) {
            alert(data);
        });
    });

    $('#stopTTS').click(function () {
        $.get('/stop_tts', function (data) {
            alert(data);
        });
    });

    $('#startTTS').click(function () {
        $.get('/start_tts', function (data) {
            alert(data);
        });
    });
});
