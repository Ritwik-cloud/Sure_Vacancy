import { Client, Query, Databases,ID } from 'appwrite';
import config from '../config/config';

export class Service{
      client = new Client();
      databases;

      constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
      }

//  function for creating a job post

      async createPost({title, sector, location, salary, description, datePosted}){
               try {
                return await this.databases.createDocument(
                    config.appwriteDatabaseId,
                    config.appwritecollectionId,
                    ID.unique(),
                    {
                        title,
                        sector,
                        location, 
                        salary, 
                        description,
                       datePosted: datePosted || new Date().toISOString(),
                      

                    }
                )
               } catch (error) {
                console.log("Appwrite service :: createPost :: error", error);
            throw error;
               }
      }


//  function for updating a job post
      async updatePost( id, {title, sector, location, salary, description, datePosted}){
               try {
                return await this.databases.updateDocument(
                    config.appwriteDatabaseId,
                    config.appwritecollectionId,
                    id,
                    {
                        title,
                        sector,
                        location, 
                        salary, 
                        description,
                        datePosted

                    }
                )
               } catch (error) {
                console.log("Appwrite service :: updatePost :: error", error);
            throw error;
               }
      }


//  function for deleting a job post
      async deletePost(id){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwritecollectionId,
                id
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

// function for getting a specific job post
     async getPost(id){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwritecollectionId,
                id
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }


  

/**
 * Get job posts with optional filtering, sorting, and pagination.
 * @param {Object} options
 * @param {string} [options.sector] - Filter by sector
 * @param {boolean} [options.latest] - Sort by latest datePosted
 * @param {number} [options.limit] - Number of results per page
 * @param {number} [options.offset] - Number of results to skip (for pagination)
 */
async getAllPosts({ sector, latest, limit, offset } = {}) {
    try {
        const queries = [];

        if (sector) {
            queries.push(Query.equal("sector", sector));
        }
        if (latest) {
            queries.push(Query.orderDesc("datePosted"));
        }
        if (limit) {
            queries.push(Query.limit(limit));
        }
        if (offset) {
            queries.push(Query.offset(offset));
        }

        return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwritecollectionId,
            queries.length > 0 ? queries : undefined
        );
    } catch (error) {
        console.log("Appwrite service :: getAllPosts :: error", error);
        return false;
    }
}



}




const service = new Service();

export default service;
