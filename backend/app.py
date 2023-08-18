import os
from flask import Flask, request, jsonify, session
import csv
import random
from models import db, CaseList, Input, CompensationCodes
from models import max_cases
import uuid
import json
from flask_sqlalchemy import SQLAlchemy, query
from sqlalchemy import select, func


# App creation and db definition
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.secret_key = 'Seriously Explainable AI @ PSU'

app.config['SQLALCHEMY_DATABASE_URI'] =\
           'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


"""DB Linking"""
# creates all the database tables in sequential order
with app.app_context():
    db.create_all()

# insert cases and definitions into CaseList table (format: id, case, def)
with app.app_context():
    with open('Case_Def.csv', newline='') as case_list:
        reader = csv.reader(case_list, delimiter=',')

        for row in reader:
            # create new CaseList instance and add to db
            if not row[1]:
                cur_description = "Description Unavailable"
            else:
                cur_description = row[1]

            new_case = CaseList(case=row[0], description=cur_description)
            db.session.add(new_case)
        db.session.commit()


'''ROUTE DEFINITIONS'''

"""# defines a route for logging a user after they press the first "Next" button
@app.route('/add_user', methods=['POST'])
def add_user():
    new_user_id = uuid.uuid4()
    rewrite_id = generate_cases()
    rewrite = query_db("SELECT case FROM CaseList WHERE case_id = ?", (rewrite_id))
    new_user = Input(new_user_id, rewrite_id, rewrite)
    # add user
    db.session.add(new_user)
    db.session.commit()

    session['id'] = new_user_id

    return 'User added successfully'"""

# route for testing
@app.route('/test', methods=['GET'])
def test():
    #rand_case = db.session.execute(select(CaseList).where(CaseList.case_id == "2")).scalar()
    rand_case = db.session.query(CaseList).order_by(func.random()).limit(5)
    return jsonify({"test":rand_case.case})

# defines a route for retrieving a case
@app.route('/get_cases', methods=['GET'])
def get_cases():
    selected_case_ids = []
    
    cases = []
    descriptions = []
    
    for i in range(max_cases):
        rand_case = db.session.query(CaseList).filter(CaseList.case_id.notin_(selected_case_ids)).order_by(func.random()).first()
        
        if rand_case:
            cases.append(rand_case.case)
            descriptions.append(rand_case.description)
            selected_case_ids.append(rand_case.case_id)

    json_cases = json.dumps(cases)
    json_descriptions = json.dumps(descriptions)
    rewrite = random.choice(cases)

    return jsonify({
        "cases": json_cases,
        "descriptions": json_descriptions,
        "rewrite": rewrite
    })


# defines a route for adding response information
@app.route('/add_response', methods=['POST'])
def add_response():
    response_data = request.get_json()
    new_response = Input()
    """complete"""


"""# defines a route for removing a user session
@app.route('/end_session', methods=['GET', 'POST'])
def end_session():
    session.pop('id')

    return 'session ended successfully'"""


"""Methods"""
# defines a method for submitting queries to the db
with app.app_context():
    def query_db(query, args=(), one=False):
        result = db.session.execute(query, args)
        if one:
            data = result.fetchone()
        else:
            data = result.fetchall()
        return data
    


if __name__ == '__main__':
    app.run(debug=True)

