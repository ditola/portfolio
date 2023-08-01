import requests

access_token = 'your-access-token'

headers = {
    'Authorization': f'Bearer {access_token}',
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
}

response = requests.get('https://api.linkedin.com/v2/me', headers=headers)

# Response is in JSON format, so we convert it to a Python dictionary
response_data = response.json()

print(response_data['id'])  # Prints the URN ID of the logged in user
