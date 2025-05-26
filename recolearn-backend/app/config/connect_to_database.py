import sqlite3
from sqlite3 import Error


def connect_to_database():
    def create_connection(db_file):
        """create a database connection to a SQLite database"""
        conn = None
        try:
            conn = sqlite3.connect(db_file)
            conn.row_factory = sqlite3.Row
            
            print("Connection to SQLite DB successful")
        except Error as e:
            print(f"The error '{e}' occurred")
        return conn

    database_path = "data/recolearn-db.sqlite"
    connection = create_connection(database_path)
    return connection
