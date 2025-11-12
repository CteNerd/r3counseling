# Lead Migration Summary

**Date:** November 11, 2025
**Branch:** copilot/create-native-offerings-form

## Changes Made

### 1. Data Migration ✅
- **Deleted 8 test user leads** (Roddy and Ashuah test submissions)
- **Migrated 7 real leads** with firstName/lastName fields
- All names split on first space (firstName = before space, lastName = after space)
- One lead (Anna) has no lastName (single name)

### 2. Database Schema Update ✅
- Added `email-index` Global Secondary Index to `Contacts` table
- Updated IAM permissions to allow Query operations on table and indexes

### 3. Duplicate Prevention ✅
- Added duplicate email check in lead handler
- Prevents same email from submitting within 24 hours
- Returns clear error message: `duplicate_submission`
- Check is non-blocking (if it fails, submission still proceeds)

### 4. Lead Handler Updates ✅
- Now accepts both `firstName`/`lastName` (new format) and `name` (old format)
- Stores all three fields: `name` (full), `firstName`, `lastName`
- Maintains backward compatibility

## Files Modified

### Backend
- `backend/serverless.yml` - Added GSI and updated IAM permissions
- `backend/src/handlers/lead.ts` - Added QueryCommand import and duplicate check
- `backend/src/scripts/export-leads.ts` - Created export script
- `backend/src/scripts/migrate-leads.ts` - Created migration script

### Frontend
- `src/components/LeadForm.tsx` - Split name field into firstName/lastName
- `src/pages/offerings/index.tsx` - Using native LeadForm instead of iframe

## Deployment Notes

⚠️ **Before deploying to production:**

1. The GSI addition will trigger a CloudFormation update
2. DynamoDB will automatically backfill the index (may take a few minutes)
3. No downtime expected, but monitor the deployment

## Next Steps

- [ ] Deploy backend changes (`sls deploy`)
- [ ] Test duplicate prevention with form submissions
- [ ] Deploy frontend changes
- [ ] Monitor CloudWatch logs for any issues
- [ ] Consider adding a cleanup job to delete spam leads periodically

## Test Results

✅ 8 test users successfully deleted
✅ 7 real leads successfully migrated
✅ All leads now have firstName/lastName fields
✅ Duplicate check logic implemented
