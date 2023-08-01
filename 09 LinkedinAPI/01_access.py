import requests
import string
import random

# Copy the client ID, secret, and redirect URI in the fields below
CLIENT_ID    = '78aspz26qe1wzv'
CLIENT_SECRET = 'hxhSdFkOt3g7qBE7'
REDIRECT_URI = 'https://www.linkedin.com/developers/tools/oauth/redirect'

# Generate a random string to protect against cross-site request forgery
letters = string.ascii_lowercase
CSRF_TOKEN = ''.join(random.choice(letters) for i in range(24))


# Request authentication URL
auth_params = {'response_type': 'code',
               'client_id': CLIENT_ID,
               'redirect_uri': REDIRECT_URI,
               'state': CSRF_TOKEN,
               'scope': 'r_liteprofile,r_emailaddress,w_member_social'}

html = requests.get("https://www.linkedin.com/oauth/v2/authorization",
                    params = auth_params)

# Print the link to the approval page
print(html.url)

# Click the link below to be taken to your redirect page.

AUTH_CODE ='AQXDpe_P2L9DRuP10TwBgEkRFyc_VVyPiZbavMMdgkktASSzR5Vx8N01ZA6PTYg-wG7oiQhS32ZYdy1A7DPxH0d3WapxHeeIzqA3994ygIGdUJ9fqrWPQpLHWhhNemYjNpfqxOXSiSkh2mxCfNZ9BXqyq50rtdnjAy08sVfkD_Q41kL9OCF2m2EVkzW09r0T4ZRuTINuMDO3pXvZj2YPe2L-pRyRfMYE7zaY6zgqIL_UT837IDYoLa4TlyE8ZKLHkc52MUZh_02_mqr_OIDQsXRpHJbMceEmh3FeFZo1Brg5ttdDd0jixF42YKe557fDawlNVR6hnPnQ4sV1pjS4YoVQnmUbFw'

ACCESS_TOKEN_URL = 'https://www.linkedin.com/oauth/v2/accessToken'

qd = {'grant_type': 'authorization_code',
      'code': AUTH_CODE,
      'redirect_uri': REDIRECT_URI,
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET}

response = requests.post(ACCESS_TOKEN_URL, data=qd, timeout=60)

response = response.json()

access_token = response['access_token']

print ("Access Token:", access_token)
print ("Expires in (seconds):", response['expires_in'])

AQXDpe_P2L9DRuP10TwBgEkRFyc_VVyPiZbavMMdgkktASSzR5Vx8N01ZA6PTYg-wG7oiQhS32ZYdy1A7DPxH0d3WapxHeeIzqA3994ygIGdUJ9fqrWPQpLHWhhNemYjNpfqxOXSiSkh2mxCfNZ9BXqyq50rtdnjAy08sVfkD_Q41kL9OCF2m2EVkzW09r0T4ZRuTINuMDO3pXvZj2YPe2L-pRyRfMYE7zaY6zgqIL_UT837IDYoLa4TlyE8ZKLHkc52MUZh_02_mqr_OIDQsXRpHJbMceEmh3FeFZo1Brg5ttdDd0jixF42YKe557fDawlNVR6hnPnQ4sV1pjS4YoVQnmUbFw