import pickle
from os.path import join, dirname

dir = dirname(__file__)


def _load(model_path):
    """Load model from file."""
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    return model


_width_path = join(dir, '..', 'data', 'gboost_width.pkl')
_depth_path = join(dir, '..', 'data', 'gboost_depth.pkl')
_width_model = _load(_width_path)
_depth_model = _load(_depth_path)


def predict_width(data):
    """Predict width."""
    return _width_model.predict(data)


def predict_depth(data):
    """Predict depth."""
    return _depth_model.predict(data)
