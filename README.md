# Watering2024

Système d'arrosage avec ESPNOW et Firebase

<h2>Description</h2>

Le système d'arrosage utilise les éléments suivants:
- Communication ESPNOW entre les différents noeuds;
- Base de données Firebase avec interface WEB (html et JavaScript);
- Noeud central sur Raspberry Pi avec NodeRed et MQTT;
- Noeud 0 : ESP8266 - MQTT vers Raspberry Pi + communication sérielle vers noeud 1;
- Noeud 1 : ESP8266 - communication sérielle vers noeud 0 + ESPNOW avec tous les autres noeuds;


