#!/usr/bin/env bash
export PYTHONUNBUFFERED=1
cd /workspace/kohya_ss
export HF_HOME="/workspace"
source /venvs/kohya_ss/bin/activate
nohup ./gui.sh --listen 0.0.0.0 --server_port 3011 --headless > /workspace/logs/kohya_ss.log 2>&1 &
