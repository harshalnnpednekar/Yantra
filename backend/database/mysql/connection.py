# MySQL Connector using PyMySQL
import pymysql
import os

def get_mysql_connection():
    return pymysql.connect(
        host=os.getenv("MYSQL_HOST", "localhost"),
        user=os.getenv("MYSQL_USER", "root"),
        password=os.getenv("MYSQL_PASSWORD", ""),
        database=os.getenv("MYSQL_DB", "yantra_db"),
        cursorclass=pymysql.cursors.DictCursor
    )
