#!/bin/bash

# Test script for the lead endpoint
# Run this after starting 'npm run dev'

echo "Testing lead endpoint..."

curl -X POST http://localhost:3001/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "message": "Test message from local testing",
    "captchaToken": "test-token"
  }' \
  | jq '.'

echo -e "\nTest completed!"
