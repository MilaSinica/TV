import { PATHS } from '../definitions/constants';
import { Program } from '../definitions/types';

export class ProgramService {
    public fetchPrograms = async (): Promise<Program[]> => {
        try {
            const response = await fetch(PATHS.FETCH_PROGRAMS);
            if (!response.ok) {
                throw new Error('Failed to fetch programs.');
            }
            const programs = await response.json();
            return programs;
        } catch (error) {
            console.error('Error fetching programs:', error);
            return [];
        }
    };
};
