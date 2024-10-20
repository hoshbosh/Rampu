import requests
import random
# The API endpoint
url = "http://127.0.0.1:3000/"

for x in range(100):
    num=random.random()*1000
    if num>500:
    # Data to be sent
        data = {
            "pressure": num,
        }
        # A POST request to the API
        response = requests.post(url, json=data)
        # Print the response
        print("Pressure over 500 detected, sending to server: "+str(num))
