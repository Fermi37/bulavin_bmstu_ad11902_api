from flask import Flask, Response, jsonify, request

app = Flask(__name__)


@app.route('/model', methods=['GET'])
def post():
    data = request
    # print(data.form['formIW'])
    return jsonify({'message': 'success'})


if __name__ == '__main__':
    app.run(debug=True)
