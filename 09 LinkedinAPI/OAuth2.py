import requests
import string
import random

# Enter your actual client_id and client_secret from your LinkedIn App
client_id = '78aspz26qe1wzv' 
client_secret = 'hxhSdFkOt3g7qBE7'
redirect_uri = 'https://www.linkedin.com/developers/tools/oauth/redirect'  # This should match the redirect_uri registered in LinkedIn app

# Generate a random string to protect against cross-site request forgery (CSRF)
letters = string.ascii_lowercase
state = ''.join(random.choice(letters) for i in range(24))

# Step 1 - Get authorization code
auth_url = f'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={client_id}&redirect_uri={redirect_uri}&state={state}&scope=r_liteprofile%20r_emailaddress%20w_member_social'
print(f'Visit this url in your web browser and authorize the app:\n{auth_url}')

# Copy the authorization code from the redirected url
auth_code = input('Enter the authorization code: ')

# Step 2 - Get access token
token_url = 'https://www.linkedin.com/oauth/v2/accessToken'
data = {
    'grant_type': 'authorization_code',
    'code': auth_code,
    'client_id': client_id,
    'client_secret': client_secret,
    'redirect_uri': redirect_uri
}
response = requests.post(token_url, data=data)
access_token = response.json().get('access_token')

print(f'Your access token is:\n{access_token}')