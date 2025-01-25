import requests

endpoint = 'http://127.0.0.1:8000/accounts/register/'  # Assure-toi que l'URL est correcte
data = {'email': 'test1@gmail.com', 'password': '1234'}

# Envoie les données en JSON
rep = requests.post(endpoint, json=data)

# Affiche le statut et la réponse
print(f"Status Code: {rep.status_code}")
print(f"Response: {rep.json()}")
