import { stringify } from 'querystring'

export interface ProcessDefinition{
   id;
   name: string;
   key: string;
   category: string;
   resource: string;
   deploymentId: string;
}