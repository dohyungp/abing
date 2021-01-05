from setuptools import setup, find_packages

setup(
    name="abitrary",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "fastapi",
        "uvicorn",
        "sqlalchemy",
        "alembic",
        "pydantic[email]",
        "python-jose[cryptography]",
        "passlib[bcrypt]",
        "psycopg2-binary",
        "xxhash",
        "python-multipart",
        "aiofiles",
        "jinja2",
        "click",
    ],
    entry_points={
        "console_scripts": [
            "abitrary=app.cli:abitrary",
        ],
    },
)
