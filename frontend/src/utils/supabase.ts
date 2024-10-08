import { createClient } from "@supabase/supabase-js"

const supabaseUrl="https://shrcmtrshfuxwaxroele.supabase.co"
const supabaseAnonPublic="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocmNtdHJzaGZ1eHdheHJvZWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1OTUwNjEsImV4cCI6MjAyMTE3MTA2MX0.1PnBVEy9IFK-rHQJJLz2vpWNdclEkGeaRU3bQbTi3Rk"

export const supabase = createClient(supabaseUrl, supabaseAnonPublic)

