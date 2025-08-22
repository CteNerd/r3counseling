// Simple local test script for the lead handler
const { handler } = require('./src/handlers/lead');

// Mock AWS services for local testing
process.env.TABLE_NAME = 'test-contacts';
process.env.NOTIFY_TO = 'test@example.com';
process.env.FROM_EMAIL = 'noreply@r3counseling.com';

// Mock event
const testEvent = {
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message',
    captchaToken: 'test-token'
  }),
  requestContext: {
    http: {
      sourceIp: '127.0.0.1'
    }
  },
  headers: {
    'user-agent': 'Test Agent'
  }
};

async function testLocal() {
  console.log('Testing lead handler locally...');
  console.log('Input:', JSON.stringify(testEvent, null, 2));
  
  try {
    const result = await handler(testEvent);
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
}

testLocal();
