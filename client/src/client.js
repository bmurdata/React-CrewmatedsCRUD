import { createClient } from '@supabase/supabase-js'

const URL = 'https://vuxxujasmwczhuthxsqy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1eHh1amFzbXdjemh1dGh4c3F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTU1NTcsImV4cCI6MTk5NjIzMTU1N30.Ho2SE8436qEOoTiAuZlnTxNkSkhq7dhBpKTDrtmGygk';
export const supabase = createClient(URL, API_KEY);
