#!/bin/bash
echo "📡 Vérification du statut des services..."
curl -I http://localhost:5000
curl -I http://localhost:3000
