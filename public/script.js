(function () {
    'use strict';

    const $  = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const clockEl = $('#clock');
    function tick() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        clockEl.textContent = `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
    }
    tick();
    setInterval(tick, 1000);

    fetch('/config.json', { cache: 'no-store' })
        .then(r => r.json())
        .then(config => {
            const allowed = new Set(config.applications || []);
            $$('.module').forEach(el => {
                if (!allowed.has(el.dataset.app)) el.style.display = 'none';
            });
        })
        .catch(() => { /* if config.json fails, leave all modules visible */ });

    const logEl = $('#log');
    function logLine(level, label, message) {
        const muted = logEl.querySelector('.is-muted');
        if (muted) muted.remove();

        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        const ts = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

        const li = document.createElement('li');
        li.className = `console-line ${level}`.trim();
        const tsSpan = document.createElement('span');
        tsSpan.className = 'ts';
        tsSpan.textContent = ts;
        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.textContent = '»';
        const body = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = label;
        body.appendChild(strong);
        body.appendChild(document.createTextNode(message));
        li.appendChild(tsSpan);
        li.appendChild(arrow);
        li.appendChild(body);

        logEl.appendChild(li);
        logEl.scrollTop = logEl.scrollHeight;

        while (logEl.children.length > 50) logEl.removeChild(logEl.firstChild);
    }

    document.addEventListener('click', async (evt) => {
        const btn = evt.target.closest('.btn');
        if (!btn) return;

        const action = btn.dataset.action;
        const target = btn.dataset.target;
        const label  = btn.dataset.label || target;
        if (!action || !target) return;

        const module    = btn.closest('.module');
        const state     = module && module.querySelector('.module-state');
        const stateText = state  && state.querySelector('.module-state-text');
        const siblings  = module ? $$('.btn', module) : [btn];

        siblings.forEach(b => { b.disabled = true; });
        btn.classList.add('is-busy');

        if (state) {
            state.dataset.state = action === 'start' ? 'starting' : 'stopping';
            if (stateText) stateText.textContent = action === 'start' ? 'STARTING' : 'STOPPING';
        }

        logLine('', label, ` // ${action}…`);

        try {
            const res = await fetch(`/${action}_${target}`, { cache: 'no-store' });
            const text = await res.text();
            if (state) {
                state.dataset.state = action === 'start' ? 'online' : 'offline';
                if (stateText) stateText.textContent = action === 'start' ? 'ONLINE' : 'OFFLINE';
            }
            logLine('ok', label, ` ${text.trim()}`);
        } catch (err) {
            if (state) {
                state.dataset.state = 'error';
                if (stateText) stateText.textContent = 'ERROR';
            }
            logLine('err', label, ` transport failure: ${err.message}`);
        } finally {
            btn.classList.remove('is-busy');
            siblings.forEach(b => { b.disabled = false; });
        }
    });
})();
