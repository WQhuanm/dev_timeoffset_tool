#!/usr/bin/bash

set -e
set -x

THIS_DIR=$(dirname `readlink -f "$0"`)
FAKETIME_DIR=$(readlink -f "${THIS_DIR}/../config/faketime.env")

echo "FAKETIME=\"+0d\""  > $FAKETIME_DIR
systemctl restart $TARGET_PROJECT.service
