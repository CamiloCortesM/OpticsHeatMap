/**
 * Interface representing an optical store with its associated leads.
 */
export interface OpticWithLeads {
  id: number; // Unique identifier for the optical store
  name: string; // Name of the optical store
  latitude: number; // Latitude coordinate of the optical store
  longitude: number; // Longitude coordinate of the optical store
  countLeads: number; // Number of leads associated with the optical store
}