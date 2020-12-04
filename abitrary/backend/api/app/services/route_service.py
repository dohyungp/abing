"""Sampling Service
"""
from typing import Enum
import hashlib


class HashType(str, Enum):
    sha1 = "sha1"
    sha512 = "sha512"
    md5 = "md5"


class HashRouter:
    """Usage:
    >>> router = HashRouter('123812412')
    >>> exp = Experiment.query.get(1)
    >>> selected_arm = router.allocate(exp)
    """

    def __init__(self, user_id: str, hash_type: HashType = HashType.sha1):
        self.user_id = user_id
        self.hash = getattr(hashlib, hash_type)

    def _digest_hash(self, data: str) -> str:
        """Hash digest"""
        h = self.hash()
        h.update(data.encode())
        hashed_data = h.hexdigest()
        return hashed_data

    def _get_hashed_ratio(self, userid: str, salt: str) -> float:
        """Hash Based Sampling
        Reference: https://tools.ietf.org/html/rfc5475
        """
        data = f"{userid}{salt}"
        hashed_data = self._digest_hash(data)
        max_hash_size = 16 ** len(hashed_data)
        hash_size = int(hashed_data, 16)
        return hash_size / max_hash_size

    def _pull_arm(self, ratio, arms):
        pass

    def route(self, experiment: object) -> object:
        """route user arm"""
        # FIXME: Arm Instance로 return 시켜야 함.
        ratio = self._get_hashed_ratio(self.user_id, experiment.id)
        selected_arm = self._pull_arm(ratio, experiment.arms)
        return selected_arm
