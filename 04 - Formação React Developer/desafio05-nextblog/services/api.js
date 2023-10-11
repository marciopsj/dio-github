import axios from "axios";

export const api = axios.create({
    baseURL: 'https://qqxtbngvngxdnguvbxbn.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxeHRibmd2bmd4ZG5ndXZieGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1MDU0ODAsImV4cCI6MjAxMTA4MTQ4MH0.6DpSr7puNjP4VSmcRQ8n7cZS_7qgY6fxDzhjGobpxts",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxeHRibmd2bmd4ZG5ndXZieGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1MDU0ODAsImV4cCI6MjAxMTA4MTQ4MH0.6DpSr7puNjP4VSmcRQ8n7cZS_7qgY6fxDzhjGobpxts"
    }
})