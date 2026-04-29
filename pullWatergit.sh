#!/bin/bash
set -Eeuo pipefail

BRANCH="main"

API_APP_NAME="waterhouse-api"
MAIN_APP_NAME="waterhouse-main"
REDESIGN_APP_NAME="waterhouse-redesign"

API_PORT="4173"
MAIN_PORT="6000"
REDESIGN_PORT="6001"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

find_app_dir() {
  local candidate
  local candidates=()

  if [[ -n "${APP_DIR:-}" ]]; then
    candidates+=("$APP_DIR")
  fi

  candidates+=(
    "$HOME/node-sites/WaterhouseMgmt"
    "$HOME/WaterhouseMgmt"
    "$SCRIPT_DIR"
  )

  for candidate in "${candidates[@]}"; do
    if [[ -d "$candidate/.git" && -f "$candidate/package.json" ]]; then
      printf '%s\n' "$candidate"
      return 0
    fi
  done

  return 1
}

APP_DIR="$(find_app_dir)" || {
  echo "Could not find WaterhouseMgmt git repo."
  echo "Checked APP_DIR, $HOME/node-sites/WaterhouseMgmt, $HOME/WaterhouseMgmt, and $SCRIPT_DIR."
  echo "Set APP_DIR=/path/to/WaterhouseMgmt and run this script again."
  exit 1
}

echo "Using app directory: $APP_DIR"
cd "$APP_DIR"

echo "Pulling latest git..."
git pull origin "$BRANCH"

echo "Installing dependencies..."
npm install

echo "Stopping PM2 apps..."
pm2 stop "$API_APP_NAME" || true
pm2 stop "$MAIN_APP_NAME" || true
pm2 stop "$REDESIGN_APP_NAME" || true
pm2 delete "$API_APP_NAME" || true
pm2 delete "$MAIN_APP_NAME" || true
pm2 delete "$REDESIGN_APP_NAME" || true

echo "Starting Waterhouse API on port $API_PORT..."
PORT="$API_PORT" pm2 start npm --name "$API_APP_NAME" -- start

echo "Starting Waterhouse main app on port $MAIN_PORT..."
pm2 start npm --name "$MAIN_APP_NAME" -- run dev:client -- --host 0.0.0.0 --port "$MAIN_PORT" --strictPort

echo "Starting Waterhouse redesign app on port $REDESIGN_PORT..."
pm2 start npm --name "$REDESIGN_APP_NAME" -- run dev:redesign -- --host 0.0.0.0 --port "$REDESIGN_PORT" --strictPort

echo "Saving PM2 process list..."
pm2 save

echo "Checking port bindings..."
ss -tulnp | grep -E "$API_PORT|$MAIN_PORT|$REDESIGN_PORT" || true

echo "Done."
