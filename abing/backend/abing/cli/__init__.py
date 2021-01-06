import click
import alembic.config as alembic_config
from abing.db.session import SessionLocal
from abing import crud, schemas


@click.group()
def abing():
    pass


@abing.command("initdb", short_help="initialze database.")
def initdb_command():
    alembic_config.main(argv=["--raiseerr", "upgrade", "head"])


@abing.command("createsuperuser", short_help="Create superuser")
@click.option("--email", prompt="email", help="User email")
@click.option("--password", prompt=True, confirmation_prompt=True, hide_input=True)
def superuser_command(email, password):
    db = SessionLocal()
    user_in = schemas.UserCreate(email=email, password=password, is_superuser=True)
    crud.user.create(db, obj_in=user_in)
