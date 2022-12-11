from app.app import app

from app.crons.search_outdated_pages import search_outdated_pages

"""
    `app` instance is shared between all crons to ensure a single instance.
    This way, we can register event and repetitive tasks in the main app.

    Add a new cron:
        * Check an example from the app.crons folder
        * Import it in this file
"""
