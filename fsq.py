from urllib import urlopen
import json
from pprint import pprint
from flask import Flask, request, render_template, redirect
from credentials import client_id, client_secret

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/count', methods=['GET'])
def getJson():
	url = 'https://api.foursquare.com/v2/venues/trending?ll=40.807536,-73.962573&client_id=' + client_id + '&client_secret=' + client_secret
	f = urlopen(url) 
	data = json.loads(f.read())
	f.close()
	count = sum([venue['hereNow']['count'] for venue in data['response']['venues']])
	count = count % 8
	print 'This is count'
	print count
	return json.dumps({'count': count})
	#return render_template('count.html')
#pprint (data)

if __name__ == '__main__':
    app.run()