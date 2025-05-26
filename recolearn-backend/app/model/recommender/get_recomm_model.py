import pickle


def get_recomm_model(model_file: str):
    loaded_model = None

    try:
        with open(model_file, "rb") as f:
            loaded_model = pickle.load(f)

    except Exception as e:
        print(e)

    return loaded_model
