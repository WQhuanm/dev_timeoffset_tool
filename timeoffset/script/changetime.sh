#!/usr/bin/bash

set -e
set -x

THIS_DIR=$(dirname `readlink -f "$0"`)
FAKETIME_DIR=$(readlink -f "${THIS_DIR}/../config/faketime.env")
p_date=${1-0}

if [[ "$p_date" == "0" ]]; then
    echo "FAKETIME=\"@$(date +%Y-%m-%d\ %H:%M:%S)\"" > $FAKETIME_DIR
else 
    echo "FAKETIME=\"@$p_date\"" > $FAKETIME_DIR
fi

systemctl restart $TARGET_PROJECT.service
