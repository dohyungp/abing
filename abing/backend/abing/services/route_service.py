"""Sampling Service
"""
from enum import Enum
from typing import List
import hashlib
import xxhash

from abing.models.experiment import Experiment
from abing.models.arm import Arm


class HashType(str, Enum):
    sha1 = "sha1"
    sha512 = "sha512"
    md5 = "md5"
    xxh32 = "xxh32"
    xxh64 = "xxh64"
    xxh128 = "xxh128"


class HashRouter:
    """Usage:
    >>> router = HashRouter('<User ID>')
    >>> exp = Session.query(Experiment).first()
    >>> selected_arm = router.route(exp)
    """

    def __init__(self, user_id: str, hash_type: HashType = HashType.xxh128):
        self.user_id = user_id
        if "xxh" in hash_type:
            self.hash = getattr(xxhash, hash_type)
        else:
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

    def _pull_arm(self, ratio: float, arms: List[Arm]) -> Arm:
        total_weight = 0
        # NOTE: traffic weight data caching
        weight_table = dict()

        for arm in arms:
            weight_table[arm] = arm.traffic_weight
            total_weight += weight_table[arm]

        current_weight = 0
        for arm in arms:
            try:
                next_weight = current_weight + (weight_table[arm] / total_weight)
            except ZeroDivisionError:
                next_weight = current_weight

            if current_weight <= ratio < next_weight:
                return arm

            current_weight = next_weight

        return arm

    def route(self, experiment: Experiment) -> Arm:
        """route user arm"""
        ratio = self._get_hashed_ratio(self.user_id, experiment.id)
        selected_arm = self._pull_arm(ratio, experiment.arms)
        return selected_arm
