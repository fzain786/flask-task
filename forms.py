from flask_wtf import  Form
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField,TextAreaField,SubmitField,RadioField,SelectField
from wtforms import validators,ValidationError
class ContactForm(Form):
    name=StringField('Name:')