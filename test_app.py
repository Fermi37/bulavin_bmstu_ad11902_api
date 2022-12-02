import pytest
import numpy as np
import pandas as pd
from app import app
from utils import validate_json_dict, transform_to_numpy, transform_to_dataframe


@pytest.fixture
def model_features():
    return dict(iw=47, iff=139, vw=4.5, fp=80)


@pytest.fixture(scope='module')
def test_client():
    with app.test_client() as client:
        yield client


def test_validate_json_dict():
    """Test validate_json_dict."""
    assert not validate_json_dict({'a': 1})
    assert validate_json_dict(dict(iw=43, iff=131, vw=12, fp=50))
    assert not validate_json_dict(dict(iw=43, iff=131, vw=12, fp='50'))


def test_model(test_client, model_features):
    """Test model."""
    response = test_client.post('/model', json=model_features)
    print(response.json)
    assert response.status_code == 200
    assert response.json['width'] == pytest.approx(2.54, 0.1)
