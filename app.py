from flask import Flask, jsonify,request,Response
from users import Users
import json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/users',methods=['GET'])
def get_users():
    return jsonify({'users':Users.get_all_users()})

@app.route('/user/<int:id>',methods=['GET'])
def get_user_by_id(id):
    user=Users.get_user(id)
    return jsonify(user)

@cross_origin()
@app.route('/add-user',methods=['POST'])
def add_user():
    data=request.get_json()
    Users.add_user(data['id'],data['user'],data['number'])
    response=Response("User Added", status=200, mimetype='application/json')
    return response

@app.route('/update-user/<int:id>',methods=['PUT'])
def update_user(id):
    data=request.get_json()
    Users.update_user(data['id'],data['user'], data['number'])
    response = Response("User Updated", status=200, mimetype='application/json')
    return response
@app.route('/delete-user/<int:id>',methods=['DELETE'])
def delete_user(id):
    Users.delete_user(id)
    response =Response("User Deleted", status=200, mimetype='application/json')
    return response



if __name__ == '__main__':
    app.run()
