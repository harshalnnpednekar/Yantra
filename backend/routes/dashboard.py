from fastapi import APIRouter, Depends
from utils.jwt import get_current_user

router = APIRouter()

@router.get("/stats")
async def get_dashboard_stats(current_user = Depends(get_current_user)):
    # Mock stats for the hackathon boilerplate
    return {
        "revenue": 45231.89,
        "users": 2350,
        "engine_load": 12,
        "ai_responses": 1234,
        "recent_activity": [
            {"id": 1, "type": "BLOCK_PROCESSED", "msg": "Block #9,451 processed", "time": "2m ago"},
            {"id": 2, "type": "USER_LOGIN", "msg": "Admin user logged in", "time": "5m ago"},
            {"id": 3, "type": "AI_PREDICTION", "msg": "Classification model updated", "time": "12m ago"}
        ]
    }
