import requests

access_token = 'AQXDpe_P2L9DRuP10TwBgEkRFyc_VVyPiZbavMMdgkktASSzR5Vx8N01ZA6PTYg-wG7oiQhS32ZYdy1A7DPxH0d3WapxHeeIzqA3994ygIGdUJ9fqrWPQpLHWhhNemYjNpfqxOXSiSkh2mxCfNZ9BXqyq50rtdnjAy08sVfkD_Q41kL9OCF2m2EVkzW09r0T4ZRuTINuMDO3pXvZj2YPe2L-pRyRfMYE7zaY6zgqIL_UT837IDYoLa4TlyE8ZKLHkc52MUZh_02_mqr_OIDQsXRpHJbMceEmh3FeFZo1Brg5ttdDd0jixF42YKe557fDawlNVR6hnPnQ4sV1pjS4YoVQnmUbFw'  # replace with your actual access token

headers = {
    'Authorization': f'Bearer {access_token}',
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
}
response = requests.get(
    'https://api.linkedin.com/v2/me',
    headers=headers
)

print(response.json())
