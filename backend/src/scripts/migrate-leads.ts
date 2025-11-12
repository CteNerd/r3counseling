import { DynamoDBClient, ScanCommand, UpdateItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const ddb = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME || "Contacts";

interface Lead {
  leadId: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
}

// Test user emails to exclude
const TEST_EMAILS = [
  "rtomlin62@gmail.com",
  "roddytdog@gmail.com",
  "roddytdog@yahoo.com",
  "ashuah.kerr@gmail.com",
  "ashuah.tomlin@gmail.com"
];

// Test user names to exclude
const TEST_NAMES = ["roddy", "ashuah", "tester"];

function isTestUser(lead: Lead): boolean {
  const emailMatch = TEST_EMAILS.some(email => 
    lead.email.toLowerCase() === email.toLowerCase()
  );
  const nameMatch = TEST_NAMES.some(name => 
    lead.name.toLowerCase().includes(name.toLowerCase())
  );
  return emailMatch || nameMatch;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim();
  const firstSpaceIndex = trimmed.indexOf(' ');
  
  if (firstSpaceIndex === -1) {
    // Single name - use as firstName
    return { firstName: trimmed, lastName: '' };
  }
  
  return {
    firstName: trimmed.substring(0, firstSpaceIndex).trim(),
    lastName: trimmed.substring(firstSpaceIndex + 1).trim()
  };
}

async function migrateLeads() {
  console.log(`\n🔄 Starting lead migration for table: ${TABLE_NAME}\n`);
  
  try {
    // Scan all leads
    const result = await ddb.send(new ScanCommand({
      TableName: TABLE_NAME
    }));

    if (!result.Items || result.Items.length === 0) {
      console.log("No leads found in the database");
      return;
    }

    const leads: Lead[] = result.Items.map(item => ({
      leadId: item.leadId?.S || "",
      name: item.name?.S || "",
      firstName: item.firstName?.S,
      lastName: item.lastName?.S,
      email: item.email?.S || ""
    }));

    console.log(`📊 Found ${leads.length} total leads\n`);

    // Separate test users and real users
    const testUsers = leads.filter(isTestUser);
    const realUsers = leads.filter(lead => !isTestUser(lead));

    console.log(`🧪 Test users to delete: ${testUsers.length}`);
    console.log(`✅ Real users to migrate: ${realUsers.length}\n`);

    // Delete test users
    let deletedCount = 0;
    for (const lead of testUsers) {
      try {
        await ddb.send(new DeleteItemCommand({
          TableName: TABLE_NAME,
          Key: {
            leadId: { S: lead.leadId }
          }
        }));
        console.log(`❌ Deleted test user: ${lead.name} (${lead.email})`);
        deletedCount++;
      } catch (error) {
        console.error(`Failed to delete lead ${lead.leadId}:`, error);
      }
    }

    console.log(`\n🗑️  Deleted ${deletedCount} test users\n`);

    // Migrate real users
    let migratedCount = 0;
    let skippedCount = 0;
    
    for (const lead of realUsers) {
      // Skip if already has firstName and lastName
      if (lead.firstName && lead.lastName) {
        console.log(`⏭️  Skipped (already migrated): ${lead.name}`);
        skippedCount++;
        continue;
      }

      const { firstName, lastName } = splitName(lead.name);
      
      try {
        await ddb.send(new UpdateItemCommand({
          TableName: TABLE_NAME,
          Key: {
            leadId: { S: lead.leadId }
          },
          UpdateExpression: "SET firstName = :firstName, lastName = :lastName",
          ExpressionAttributeValues: {
            ":firstName": { S: firstName },
            ":lastName": { S: lastName }
          }
        }));
        
        console.log(`✅ Migrated: "${lead.name}" → firstName: "${firstName}", lastName: "${lastName}"`);
        migratedCount++;
      } catch (error) {
        console.error(`Failed to migrate lead ${lead.leadId}:`, error);
      }
    }

    console.log(`\n🎉 Migration Complete!\n`);
    console.log(`📈 Summary:`);
    console.log(`   - Deleted: ${deletedCount} test users`);
    console.log(`   - Migrated: ${migratedCount} leads`);
    console.log(`   - Skipped: ${skippedCount} leads (already migrated)`);
    console.log(`   - Total remaining: ${realUsers.length}\n`);

  } catch (error) {
    console.error("Error during migration:", error);
    throw error;
  }
}

// Run the migration
migrateLeads().catch(console.error);
