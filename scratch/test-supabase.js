const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qgukgtfnganzuqihqrak.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndWtndGZuZ2FuenVxaWhxcmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NDQ4NDgsImV4cCI6MjA5NTAyMDg0OH0.vdacmFyyPFLwpMHEBQvDI-NLDrTrKqUktxXSsaIxOgo';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
  console.log('Testing select...');
  try {
    const { data, error } = await supabase
      .from('Waitlist')
      .select('*')
      .limit(1);
    
    if (error) {
      console.error('Select Error:', error);
    } else {
      console.log('Select Data:', data);
    }
  } catch (err) {
    console.error('Catch Select Error:', err);
  }

  console.log('\nTesting insert...');
  try {
    const { data, error } = await supabase
      .from('Waitlist')
      .insert([{ name: 'Test User', email: 'test@example.com' }]);
    
    if (error) {
      console.error('Insert Error:', error);
    } else {
      console.log('Insert Success:', data);
    }
  } catch (err) {
    console.error('Catch Insert Error:', err);
  }
}

run();
