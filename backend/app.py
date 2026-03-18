from flask import Flask, render_template, request, redirect, jsonify
import sqlite3

app = Flask(__name__)

# Create DB
def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        income INTEGER,
        expense INTEGER,
        risk_score INTEGER,
        loan_status TEXT,
        reason TEXT
    )
    ''')

    conn.commit()
    conn.close()

init_db()


# HOME
@app.route('/')
def home():
    return render_template('dashboard.html')


# SAVE USER DATA
@app.route('/save', methods=['POST'])
def save_data():
    data = request.json

    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute('''
    INSERT INTO users (name, income, expense, risk_score, loan_status)
    VALUES (?, ?, ?, ?, ?)
    ''', (
        data['name'],
        data['income'],
        data['expense'],
        data['risk_score'],
        "Pending"
    ))

    conn.commit()
    conn.close()

    return jsonify({"message": "Saved"})


# BANKER VIEW
@app.route('/users')
def get_users():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute("SELECT * FROM users")
    users = c.fetchall()

    conn.close()

    return jsonify(users)


# APPROVE / REJECT
@app.route('/update_status', methods=['POST'])
def update_status():
    data = request.json

    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute('''
    UPDATE users
    SET loan_status=?, reason=?
    WHERE id=?
    ''', (
        data['status'],
        data['reason'],
        data['id']
    ))

    conn.commit()
    conn.close()

    return jsonify({"message": "Updated"})


if __name__ == '__main__':
    app.run(debug=True)
