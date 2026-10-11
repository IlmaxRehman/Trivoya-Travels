
import sqlite3
from pathlib import Path

db_path = Path(__file__).parent / "db.sqlite3"
connection = sqlite3.connect(str(db_path))
cursor = connection.cursor()

tables = [
    "tours_category",
    "tours_tour",
    "tours_tourimage",
    "tours_blogpost",
    "tours_booking",
]

print("Local Trivoya database records:\n")

for table in tables:
    count = cursor.execute(
        f'SELECT COUNT(*) FROM "{table}"'
    ).fetchone()[0]
    print(f"{table}: {count}")

connection.close()
