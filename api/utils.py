import numpy as np
import pandas as pd


def transform_to_numeric(json_dict):
    """Transform a json dict to a numeric."""
    return {key: float(value) for key, value in json_dict.items()}


def validate_json_dict(json_dict):
    """Validate json dict."""
    if len(json_dict) != 4:
        return False
    # values must be numeric
    for value in json_dict.values():
        if not isinstance(value, (int, float)):
            return False
    # keys must be iw, iff, vw, fp
    if not all(key in json_dict for key in ['iw', 'iff', 'vw', 'fp']):
        return False
    return True


def transform_to_numpy(json_dict):
    """Transform a json dict to a numpy array."""
    return np.array(list(json_dict.values())).reshape(1, -1)


def transform_to_dataframe(json_dict):
    """Transform a json dict to a pandas dataframe."""
    columns = {'iw': 'IW', 'iff': 'IF', 'vw': 'VW', 'fp': 'FP'}
    return pd.DataFrame(json_dict, index=[0]).rename(columns=columns)
