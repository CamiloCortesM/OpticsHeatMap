import { OpticWithLeads } from '../interfaces/OpticsLeads';

/**
 * Sample data for optical stores and their leads.
 * This is used for demonstration purposes and should be replaced by actual API data.
 */
export const opticsData: OpticWithLeads[] = [
  {
    id: 1,
    name: 'Optica Madrid',
    latitude: 40.4168, // Madrid, España
    longitude: -3.7038,
    countLeads: 5,
  },
  {
    id: 2,
    name: 'Farmacia Sol',
    latitude: 40.4400, // Aproximadamente 3 km al norte de Madrid
    longitude: -3.7038,
    countLeads: 3,
  },
  {
    id: 3,
    name: 'Clínica Dental Retiro',
    latitude: 40.4168, // Aproximadamente 3 km al este de Madrid
    longitude: -3.6750,
    countLeads: 7,
  },
  {
    id: 4,
    name: 'Hospital La Paz',
    latitude: 40.3936, // Aproximadamente 3 km al sur de Madrid
    longitude: -3.7038,
    countLeads: 10,
  },
  {
    id: 5,
    name: 'Centro Médico Chamartín',
    latitude: 40.4168, // Aproximadamente 3 km al oeste de Madrid
    longitude: -3.7326,
    countLeads: 8,
  },
];
