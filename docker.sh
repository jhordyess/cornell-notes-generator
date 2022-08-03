#!/bin/bash
docker build -t jhordyess/conoge . \
&& docker run -it --rm -p 80:80 jhordyess/conoge