# MediaVault
MediaVault is a digital library that allows users to track their favourite games, movies, and TV shows.

# Setup

## Command Line

### 1. Clone the project
Clone the repository using PowerShell, Bash or another terminal: `gh repo clone lukemanuelmg/MediaVault`

Then move to the project directory: `cd MediaVault`

### 2. Set up environment variables
Create `.env` and copy the text from `.env.example` into it: `cp .env.example .env`

Using a text editor, replace the values in `.env` that say `CHANGE_ME` with your own.

### 3. Start the Docker containers
Start the Docker containers needed for the project: `docker compose up -d`

### 4. Create the database
