import pandas as pd

def adjust_scores(boost_file: str, items: list, identifier: str): 
    df_boosts = pd.read_csv(boost_file)

    boosts = dict(zip(df_boosts["id"], df_boosts["boost"]))

    for item in items:
        item_id = item[identifier]
        if item_id in boosts:
            boost = boosts[item_id]
            if item["score"] >= 0:
                item["score"] *= 1 + boost
            else:
                item["score"] *= 1 - boost

    items = sorted(items, key=lambda x: -float(x["score"]))

    return items