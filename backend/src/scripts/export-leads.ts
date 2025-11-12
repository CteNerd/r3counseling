import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { writeFileSync } from "fs";
import { join } from "path";

const ddb = new DynamoDBClient({});
const TABLE_NAME = process.env.TABLE_NAME || "Contacts";

interface Lead {
  leadId: string;
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  message: string;
  createdAt: string;
  ip: string;
  userAgent: string;
}

async function exportLeads() {
  console.log(`Exporting leads from table: ${TABLE_NAME}`);
  
  try {
    const result = await ddb.send(new ScanCommand({
      TableName: TABLE_NAME
    }));

    if (!result.Items || result.Items.length === 0) {
      console.log("No leads found in the database");
      return;
    }

    // Convert DynamoDB items to plain objects
    const leads: Lead[] = result.Items.map(item => ({
      leadId: item.leadId?.S || "",
      name: item.name?.S || "",
      firstName: item.firstName?.S,
      lastName: item.lastName?.S,
      email: item.email?.S || "",
      message: item.message?.S || "",
      createdAt: item.createdAt?.S || "",
      ip: item.ip?.S || "",
      userAgent: item.userAgent?.S || ""
    }));

    // Sort by createdAt
    leads.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    // Generate markdown content
    let markdown = `# R3 Counseling Leads Export\n\n`;
    markdown += `**Export Date:** ${new Date().toISOString()}\n`;
    markdown += `**Total Leads:** ${leads.length}\n\n`;
    markdown += `---\n\n`;

    leads.forEach((lead, index) => {
      markdown += `## Lead ${index + 1}\n\n`;
      markdown += `- **Lead ID:** ${lead.leadId}\n`;
      markdown += `- **Name:** ${lead.name}\n`;
      if (lead.firstName) {
        markdown += `- **First Name:** ${lead.firstName}\n`;
      }
      if (lead.lastName) {
        markdown += `- **Last Name:** ${lead.lastName}\n`;
      }
      markdown += `- **Email:** ${lead.email}\n`;
      markdown += `- **Message:** ${lead.message || "(No message)"}\n`;
      markdown += `- **Created At:** ${lead.createdAt}\n`;
      markdown += `- **IP:** ${lead.ip}\n`;
      markdown += `- **User Agent:** ${lead.userAgent}\n`;
      markdown += `\n---\n\n`;
    });

    // Write to file
    const outputPath = join(process.cwd(), "leads-export.md");
    writeFileSync(outputPath, markdown, "utf-8");
    
    console.log(`\n✅ Export complete!`);
    console.log(`   Total leads exported: ${leads.length}`);
    console.log(`   Output file: ${outputPath}`);
    
    // Summary stats
    const withFirstName = leads.filter(l => l.firstName).length;
    const withLastName = leads.filter(l => l.lastName).length;
    const withMessage = leads.filter(l => l.message).length;
    
    console.log(`\n📊 Statistics:`);
    console.log(`   Leads with firstName: ${withFirstName}`);
    console.log(`   Leads with lastName: ${withLastName}`);
    console.log(`   Leads with message: ${withMessage}`);
    console.log(`   Leads with name field: ${leads.length}`);

  } catch (error) {
    console.error("Error exporting leads:", error);
    throw error;
  }
}

// Run the export
exportLeads().catch(console.error);
