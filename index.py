from flask import Flask, Response, jsonify, request
from flask_cors import CORS
from utils import validate_json_dict, transform_to_dataframe, transform_to_numeric
# from model import predict_width, predict_depth


cors = CORS()
app = Flask(__name__)
cors.init_app(app)


@app.route('/model', methods=['POST'])
def post():
    if (features := request.get_json()) is None:
        return Response(status=400)
    features = transform_to_numeric(features)
    if not validate_json_dict(features):
        return Response(status=400)
    data = transform_to_dataframe(features)
    # depth = predict_depth(data)[0]
    # width = predict_width(data)[0]
    return jsonify(dict(depth=0, width=0))


if __name__ == '__main__':
    app.run(debug=True)
