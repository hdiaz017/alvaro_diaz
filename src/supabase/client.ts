import { createClient } from '@supabase/supabase-js';

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const url = import.meta.env.VITE_SUPABASE_URL;
export const supabase = createClient(url, supabaseKey);
