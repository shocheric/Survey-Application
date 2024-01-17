import os
from flask import Flask, request, jsonify, session
import csv
import random
from models import db, CaseList, UserInput, Ratings, CompensationCodes
from models import max_cases
import uuid
import json
from flask_sqlalchemy import SQLAlchemy, query
from sqlalchemy import select, func



# App creation and db definition
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
app.secret_key = 'Seriously Explainable AI @ PSU'
# App configs. First db then session
app.config['SQLALCHEMY_DATABASE_URI'] =\
           'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_TYPE'] = "filesystem"

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

# route for testing
@app.route('/test', methods=['GET'])
def test():
    #rand_case = db.session.execute(select(CaseList).where(CaseList.case_id == "2")).scalar()
    rand_case = db.session.query(CaseList).order_by(func.random()).limit(5)
    return jsonify({"test":rand_case.case})

# defines a route for retrieving a case
@app.route('/get_cases', methods=['GET'])
def get_cases():
    # if statement to test user session
    if "user" not in session:
        session.permanent = False
        session["user"] = uuid.uuid4()
        print("Session started successfully".upper())
        print("SessionID: " + str(session["user"]))

        selected_case_ids = []
        cases = []
        descriptions = []
        
        for i in range(max_cases):
            rand_case = db.session.query(CaseList).filter(CaseList.case_id.notin_(selected_case_ids)).order_by(func.random()).first()
            
            # append cases and descriptions to lists. Indices correspond to linked case/desc
            if rand_case:
                cases.append(rand_case.case)
                descriptions.append(rand_case.description)
                selected_case_ids.append(rand_case.case_id)

        # choose a random case from the list to be the rewrite
        randInt = random.randrange(0, max_cases - 1)
        rewrite = [cases[randInt], descriptions[randInt]]

        # Save data to session storage
        session['cases'] = cases
        session['descriptions'] = descriptions
        session['rewrite'] = rewrite

    else:
        # get values from session storage
        cases = session.get('cases')
        descriptions = session.get('descriptions')
        rewrite = session.get('rewrite')

        print("User is already in session".upper())
        print(session["user"])
        print(f"cases: {cases}")

    try:
        return jsonify({
            "cases": cases,                # [case1, case2,...,casen]
            "descriptions": descriptions,  # [desc1, desc2,...,descn]
            "rewrite": rewrite,            # [case, desc]
            "max_cases": max_cases         # so we just have to change in one place
        })
    
    except Exception as e:
        print("Error returning cases: {e}".upper())
        return "Error returning cases"


# TODO: defines a route for adding response information. Handles: Case, Rewrite
@app.route('/input', methods=['POST'])
def input():
    response_data = request.get_json()
    # Case format: {case: case, u_rating: u-rating, s_rating: s-rating}
    # UserInput format: {rewrite_id: id, rewritten: bool, rewrite: string}
    print(response_data)

    # Get the case_id of given case
    # case_id = get_case_id(case)


    
    # Check type value to see if case or rewrite
    """Case Response Insertions: UserID(string), CaseID(string), Understandability rating(int), Severity rating(int)"""
    # First check if case has already been inserted by given user. If so, update the value associated with it. 
    #db_response = query_db("SELECT * FROM Ratings WHERE user_id = ? AND case_id = ?", (session["user"], ))
    # If case not in db, create entry for it with given value

    """Rewrite Response Insertions: User_id(string), Rewrite_id(string), Rewritten(bool), Rewrite(string), Date Completed (date)"""
    # If Rewritten true, insert rewrite info into the UserInput table with current date



# Logs time spent by users answering case questions
@app.route('/log_time', methods=['POST'])
def log_time():
    time_data = request.get_json()
    print("TIME DATA: "+str(time_data))
    csv_insert = [session['user'], str(time_data)]
    print(csv_insert)

    # write data to csv
    with open('time_test.csv', 'a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(csv_insert)
    file.close()

    return 'time logged successfully'


# defines a route for removing a user session
@app.route('/end_session', methods=['GET', 'POST'])
def end_session():
    if "user" in session:
        session.pop("user")
        print("SESSION ENDED SUCCESSFULLY")

    return 'session ended successfully'


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
    

# defines method to take the case and return case_id
def get_case_id(case):
    case_id = query_db("SELECT case_id FROM CaseList WHERE case = ?", case)
    print(f"CASE_ID: {case_id}")
    return case_id


if __name__ == '__main__':
    app.run(debug=True)

