import { createClient } from '@supabase/supabase-js';

// Use environment variables.  It's crucial to check if these are defined.
// 1.  Environment Variables (Correctly Prefixed)
const supabaseUrl = process.env.NEXT_PUBLIC_KURES_APP_SUPABASE_URL;  // Correct Prefix
const supabaseAnonKey = process.env.NEXT_PUBLIC_KURES_APP_SUPABASE_ANON_KEY; // Correct Prefix

if (!supabaseUrl) {
  throw new Error('KURES_APP_SUPABASE_URL is not defined in the environment.');
}

if (!supabaseAnonKey) {
  throw new Error('KURES_APP_SUPABASE_ANON_KEY is not defined in the environment.');
}

// Create the Supabase client.  The types are automatically inferred.
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Export the client for use in your application.
export default supabase;
