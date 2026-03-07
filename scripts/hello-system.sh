#!/bin/bash
echo "Привіт, Максе! Я твій AskMi-агент."
echo "Сьогодні: $(date)"
echo "Твоя система: $(uname -sr)"
echo "Місце на диску /home: $(df -h /home | awk 'NR==2 {print $4}') вільно."