const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    adminEmail : String(import.meta.env.VITE_APPWRITE_ADMIN_EMAIL),
    adminPassword : String(import.meta.env.VITE_APPWRITE_ADMIN_PASSWORD),
    

}




export default config;