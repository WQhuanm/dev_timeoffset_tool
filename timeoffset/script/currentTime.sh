#!/usr/bin/bash

set -e
set -x

THIS_DIR=$(dirname `readlink -f "$0"`)
FAKETIME_DIR=$(readlink -f "${THIS_DIR}/../config/faketime.env")
source $FAKETIME_DIR
export FAKETIME 

date "+%F %T"