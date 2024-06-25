import { OpticWithLeads } from '../interfaces/OpticsLeads';

/**
 * Sample data for optical stores and their leads.
 * This is used for demonstration purposes and should be replaced by actual API data.
 */
export const opticsData: OpticWithLeads[] = [
  {
    id: 1,
    name: 'Optica Central',
    latitude: 37.7749, // Latitude of the optical store
    longitude: -122.4194, // Longitude of the optical store
    numLeads: 50, // Number of leads associated with the optical store
  },
  {
    id: 2,
    name: 'Optica Norte',
    latitude: 37.8044, 
    longitude: -122.2711, 
    numLeads: 10,
  },
  {
    id: 3,
    name: 'Optica Sur',
    latitude: 37.6879,
    longitude: -122.4702,
    numLeads: 45,
  },
];
