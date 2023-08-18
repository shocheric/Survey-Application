from flask_sqlalchemy import SQLAlchemy
from flask import Flask, render_template, request, redirect, url_for, jsonify
from datetime import datetime

db = SQLAlchemy()

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
        return '<CaseId "%s"' % self.caseId
    

# Table for storing pre-uploaded compensation codes that can be chosen randomly
class CompensationCodes(db.Model):
    __tablename__ = 'CompensationCodes'
    code_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    code = db.Column(db.String(100), nullable=False)

    def __init__(self, code_id, code):
        self.code_id = code_id
        self.code = code

    def __repr__(self):
        return '<CodeId "%s"' % self.codeId

# define variable used to determine the number of cases to generate in the database
max_cases = 5

# Table for storing all user inputs and the cases that they responded to
class Input(db.Model):
    __tablename__ = 'Input'
    user_id = db.Column(db.String, primary_key=True)
    rewrite_id = db.Column(db.Integer, db.ForeignKey('CaseList.case_id'))
    rewritten = db.Column(db.String(300), nullable=False)
    rewrite = db.Column(db.String(300), nullable=False)
    compensation_code = db.Column(db.String(100), nullable=False)
    date_completed = db.Column(db.DateTime, default=datetime.utcnow)
    # for loop to create columns for the variable number of cases, capped by 'max_cases' variable
    for i in range(1, max_cases+1):
        vars()[f"case_id_{i}"] = db.Column(db.Integer, db.ForeignKey('CaseList.case_id'))
        vars()[f"understandability_rating_{i}"] = db.Column(db.Integer, default=-1)
        vars()[f"severity_rating_{i}"] = db.Column(db.Integer, default=-1)

    def __init__(self, user_id, rewrite_id, rewrite, compensation_code="None Available"):
        self.user_id = user_id
        self.rewrite_id = rewrite_id
        self.rewrite = rewrite
        self.compensation_code = compensation_code

    def __repr__(self):
        return '<Input "%s"' % self.userId