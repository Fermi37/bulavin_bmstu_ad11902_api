import pickle


def _load(model_path):
    """Load model from file."""
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    return model


_width_model = _load('gboost_width.pkl')
_depth_model = _load('gboost_depth.pkl')


def predict_width(data):
    """Predict width."""
    return _width_model.predict(data)


def predict_depth(data):
    """Predict depth."""
    return _depth_model.predict(data)
