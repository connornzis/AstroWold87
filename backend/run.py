import sys
from pathlib import Path

# Get the parent directory of 'backend' (the actual project root)
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))

from backend import create_app

flask_app = create_app()


if __name__ == "__main__":
    flask_app.run(host="localhost", debug=True)