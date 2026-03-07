#!/bin/bash
echo "--- СТАН СИСТЕМИ ---"
echo "Користувач: $USER"
echo "Папка: $(pwd)"
echo "Диски:"
lsblk -n -o NAME,SIZE,TYPE,MOUNTPOINT | grep 'part'