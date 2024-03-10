from flask import Flask, request
import datetime
from hatemine import predict
x = datetime.datetime.now()
from flask_cors import CORS
import urllib.parse
 
# Initializing flask app
app = Flask(__name__)
CORS(app)
 
# Route for seeing a data
@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }

@app.route('/predict', methods=['POST'])
def predict_message():
    message_encoded = request.json.get('msg')
    message = urllib.parse.unquote(message_encoded)
    print(message)

    val = predict(message)

    if val == True:
        return "myso"
    else:
        return "non myso"
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)