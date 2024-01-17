from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, redirect, url_for, jsonify
from datetime import datetime

db = SQLAlchemy()
# define variable used to determine the number of cases to generate in the database
max_cases = 4

# Table for storing the cases and their definitions, accessed via their case_id
class CaseList(db.Model):
    __tablename__ = 'CaseList'
    case_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    case = db.Column(db.String(300), nullable=False)
    description = db.Column(db.String(1000), nullable=False)

    # constructor for instantiating CaseList models
    def __init__(self, case, description):
        self.case = case
        self.description = description

    def __repr__(self):
        return f'<CaseList case_id={self.case_id}>'
    

# Table for storing pre-uploaded compensation codes that can be chosen randomly
class CompensationCodes(db.Model):
    __tablename__ = 'CompensationCodes'
    code_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    code = db.Column(db.String(100), nullable=False)

    def __init__(self, code_id, code):
        self.code_id = code_id
        self.code = code

    def __repr__(self):
        return f'<CompensationCodes code_id={self.code_id}>'


# Table for storing all user inputs and the cases that they responded to
class UserInput(db.Model):
    __tablename__ = 'UserInput'
    user_id = db.Column(db.String, primary_key=True)
    rewrite_id = db.Column(db.Integer, db.ForeignKey('CaseList.case_id'))
    rewritten = db.Column(db.String(300), nullable=False)
    rewrite = db.Column(db.String(300), nullable=False)
    date_completed = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, user_id, rewrite_id, rewritten, rewrite, compensation_code="None Available"):
        self.user_id = user_id
        self.rewrite_id = rewrite_id
        self.rewritten = rewritten
        self.rewrite = rewrite
        self.compensation_code = compensation_code

    def __repr__(self):
        return f'<UserInput user_id={self.user_id}, rewrite_id={self.rewrite_id}, rewritten={self.rewritten} rewrite={self.rewrite}>'
    
class Ratings(db.Model):
    __tablename__ = 'Ratings'
    rating_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.String, db.ForeignKey('UserInput.user_id'))
    case_id = db.Column(db.Integer, db.ForeignKey('CaseList.case_id'))
    understandability_rating = db.Column(db.Integer, default=-1)
    severity_rating = db.Column(db.Integer, default=-1)

    def __init__(self, user_id, case_id, understandability_rating, severity_rating):
        self.user_id = user_id
        self.case_id = case_id
        self.understandability_rating = understandability_rating
        self.severity_rating = severity_rating  

    def __repr__(self):
        return f'<Ratings user_id="{self.user_id}", case_id={self.case_id}, understandability_rating={self.understandability_rating}, severity_rating={self.severity_rating}>'
