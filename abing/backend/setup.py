import os
from setuptools import setup, find_packages

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

home = os.path.abspath(os.path.dirname(__name__))

setup(
    name="abing",
    version="0.1.0",
    packages=find_packages(home),
    include_package_data=True,
    author="Dohyung Park",
    author_email="dohyung.prk@gmail.com",
    description="Simply setup AB testing environment",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/dohyungp/abing",
    platforms=["any"],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
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
            "abing=abing.cli:abing",
        ],
    },
    python_requires=">=3.6",
)
