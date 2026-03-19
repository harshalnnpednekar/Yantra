from slowapi import Limiter
from slowapi.util import get_remote_address

# This isn't technically a middleware file in the traditional sense for SlowAPI,
# but it's where we define the limiter instance if we want it shared.
# The actual middleware is mounted in main.py.

limiter = Limiter(key_func=get_remote_address)

# Usage in routes:
# @router.get("/heavy")
# @limiter.limit("5/minute")
# async def heavy_route(request: Request):
#     ...
