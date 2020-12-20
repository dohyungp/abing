"""Add Columns created and updated time

Revision ID: 88b3cab99dfd
Revises: ce5a475e1888
Create Date: 2020-12-19 07:46:02.653996

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "88b3cab99dfd"
down_revision = "ce5a475e1888"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "arms",
        sa.Column(
            "time_created",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    op.add_column(
        "arms",
        sa.Column(
            "time_updated",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    op.add_column(
        "experiments",
        sa.Column(
            "time_created",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    op.add_column(
        "experiments",
        sa.Column(
            "time_updated",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    op.add_column(
        "features",
        sa.Column(
            "time_created",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    op.add_column(
        "features",
        sa.Column(
            "time_updated",
            sa.DateTime(timezone=True),
            server_default=sa.text("now()"),
            nullable=True,
        ),
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("features", "time_updated")
    op.drop_column("features", "time_created")
    op.drop_column("experiments", "time_updated")
    op.drop_column("experiments", "time_created")
    op.drop_column("arms", "time_updated")
    op.drop_column("arms", "time_created")
    # ### end Alembic commands ###
