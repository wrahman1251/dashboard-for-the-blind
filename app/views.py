from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/dashboard')
def pg2():
	return render_template('pg2.html')