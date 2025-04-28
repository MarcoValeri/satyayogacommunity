import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import { dbGetClassesOrderByDate } from '../db/dbGetClasses';

import { db } from '../firebaseConfig';

jest.mock('firebase/firestore');

jest.mock('../firebaseConfig', () => ({
    db: {
        type: 'mockDb'
    }
}));

describe('dbGetClassesOrderByDate', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should fetch classes ordered by date descending', async () => {

        const mockClassesData = [
            { id: 'class2', data: () => ({ title: 'Later Class', date: '2023-12-25T10:00:00Z' }) },
            { id: 'class1', data: () => ({ title: 'Earlier Class', date: '2023-12-24T18:00:00Z' }) },
        ];
        const mockQuerySnapshot = {
            docs: mockClassesData,
            forEach: (callback) => mockClassesData.forEach(doc => callback(doc))
        };
        const mockCollectionRef = { type: 'collection' };
        const mockQueryRef = { type: 'query' };

        collection.mockReturnValue(mockCollectionRef);
        query.mockReturnValue(mockQueryRef);
        orderBy.mockImplementation((field, direction) => ({ field, direction }));
        getDocs.mockResolvedValue(mockQuerySnapshot);

        const result = await dbGetClassesOrderByDate();

        expect(collection).toHaveBeenCalledWith(expect.anything(), 'Classes');
        expect(orderBy).toHaveBeenCalledWith('date', 'desc');
        expect(query).toHaveBeenCalledWith(mockCollectionRef, { field: 'date', direction: 'desc' });
        expect(getDocs).toHaveBeenCalledWith(mockQueryRef);

        expect(result).toHaveLength(2);
        expect(result[0]).toEqual({ id: 'class2', title: 'Later Class', date: '2023-12-25T10:00:00Z' });
        expect(result[1]).toEqual({ id: 'class1', title: 'Earlier Class', date: '2023-12-24T18:00:00Z' });

        expect(new Date(result[0].date).getTime()).toBeGreaterThan(new Date(result[1].date).getTime());
    });

     test('should return an empty array if no classes found', async () => {
        const mockQuerySnapshot = {
            docs: [],
            forEach: (callback) => [].forEach(doc => callback(doc))
        };
        const mockCollectionRef = { type: 'collection' };
        const mockQueryRef = { type: 'query' };
        collection.mockReturnValue(mockCollectionRef);
        query.mockReturnValue(mockQueryRef);
        orderBy.mockImplementation((field, direction) => ({ field, direction }));
        getDocs.mockResolvedValue(mockQuerySnapshot);
        const result = await dbGetClassesOrderByDate();
        expect(result).toEqual([]);
        expect(getDocs).toHaveBeenCalled();
        expect(collection).toHaveBeenCalled();
        expect(query).toHaveBeenCalled();
        expect(orderBy).toHaveBeenCalled();
    });

     test('should log an error if Firestore fails', async () => {
        const firestoreError = new Error('Firestore unavailable');
        const mockCollectionRef = { type: 'collection' };
        const mockQueryRef = { type: 'query' };

        collection.mockReturnValue(mockCollectionRef);
        query.mockReturnValue(mockQueryRef);
        orderBy.mockImplementation((field, direction) => ({ field, direction }));
        getDocs.mockRejectedValue(firestoreError);

        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });

        const result = await dbGetClassesOrderByDate();

        expect(result).toBeUndefined();
        expect(getDocs).toHaveBeenCalled();

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Error getting documents: Error: Firestore unavailable')
        );

        consoleSpy.mockRestore();
    });
});