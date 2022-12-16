################################################################
# Makefile to setup the local development environment
################################################################

#-----------------------------------------------------------------------------------------------
# Shell variables
#-----------------------------------------------------------------------------------------------
# Console text colors :)
BOLD=$(shell tput bold)
RED=$(shell tput setaf 1)
GREEN=$(shell tput setaf 2)
YELLOW=$(shell tput setaf 3)
RESET=$(shell tput sgr0)

# Virtual environment
VENV = venv
PYTHON = $(VENV)/bin/python3
PIP = $(VENV)/bin/pip3
DOCKER-COMPOSE = docker-compose

# Assume latest if no tag argument exists
BUILD_TAG = ""
ifdef tag
	# Build the tag
	BUILD_TAG=":$(tag)"
endif

# By default assume that the blueprints repository is at the same level of this repository
BLUEPRINTS_PATH = "$(shell dirname $$PWD)/platform-provision-blueprints/blueprints"
ifdef blueprints-path
	BLUEPRINTS_PATH="$(blueprints-path)"
endif

# Default run command
COMMAND = "--help"
ifdef command
	COMMAND=$(command)
endif

#-----------------------------------------------------------------
# Tasks
#-----------------------------------------------------------------
help:
	@echo "$(BOLD)$(GREEN)Platform Provision CLI"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: virtualenv
virtualenv:  ## Creates a virtual environment
	@virtualenv $(VENV)

.PHONY: local-init
local-init: virtualenv  ## Init the local environment
	@$(PIP) install -r requirements.txt

.PHONY: local-run
local-run:  ## Run local API
	uvicorn app.server:app --reload

.PHONY: local-cron
local-cron:  ## Run local cron
	uvicorn app.cron:app --reload

# Default command to help
.DEFAULT_GOAL := help
