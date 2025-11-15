from flask import render_template, request, redirect, url_for, flash
from flask_login import login_user, current_user
from ..models import User
from .. import db
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, IntegerField
from wtforms.fields import EmailField
from wtforms.validators import DataRequired, Email, EqualTo


class LoginForm(FlaskForm):
    email = EmailField("email", validators=[DataRequired('Email required to log Lola')])
    password = PasswordField("password", validators=[DataRequired('Password required')])
    submit = SubmitField('Sign in')


class RegisterForm(FlaskForm):
    first_name = StringField("first name", validators=[DataRequired('Please enter your first name')])
    last_name = StringField('last name', validators=[DataRequired('Please enter your last name')])
    age = IntegerField('age', validators=[DataRequired('Age is required!')])
    email = EmailField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Enter user Password', validators=[DataRequired()])
    password_confirm = PasswordField('Repeat Password', validators=[DataRequired(), EqualTo('password')])
    submit = SubmitField('Register')