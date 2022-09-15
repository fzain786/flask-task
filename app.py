import os.path
from flask import Flask,redirect,url_for,request,render_template,make_response,session,abort,flash,send_file
from werkzeug.utils import secure_filename
from forms import ContactForm
app = Flask(__name__)
app.secret_key='any random string'
@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/contact',methods=['GET','POST'])
def contact():
    form=ContactForm()
    if request.method=='POST':
        if form.validate()==False:
            return  render_template('contact.html',form=form)
        else:
            return render_template('success.html')
    elif request.method=='GET':
        return  render_template('contact.html',form=form)



if __name__ == '__main__':
    app.debug=True
    app.run()
    app.run(debug=True)
    app.config('upload')


