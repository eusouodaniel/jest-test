import OperationsService from '../../src/services/operations.service';

describe('Triangle', () => {
    const operationsService = new OperationsService();

    it('test zero numbers', async () => {
        const result = operationsService.getTriangleType(0,0,0);
        expect(result).toEqual(
            operationsService.TRIANGLE_NON_EXISTENT
        );
    })

    it('test numbers < 0', async () => {
        const result = operationsService.getTriangleType(-1,-2,-3);
        expect(result).toEqual(
            operationsService.TRIANGLE_NON_EXISTENT
        );
    })

    it('test invalid triangle first scenario(a+b > c)', async () => {
        const result = operationsService.getTriangleType(5,3,2);
        expect(result).toEqual(
            operationsService.TRIANGLE_NON_EXISTENT
        );
    })

    it('test invalid triangle second scenario(a+c > b)', async () => {
        const result = operationsService.getTriangleType(5,8,2);
        expect(result).toEqual(
            operationsService.TRIANGLE_NON_EXISTENT
        );
    })

    it('test invalid triangle third scenario(b+c > a)', async () => {
        const result = operationsService.getTriangleType(8,2,5);
        expect(result).toEqual(
            operationsService.TRIANGLE_NON_EXISTENT
        );
    })

    it('test isosceles triangle first scenario', async () => {
        const result = operationsService.getTriangleType(35,35,32);
        expect(result).toEqual(
            operationsService.TRIANGLE_ISOSCELES
        );
    })

    it('test isosceles triangle second scenario', async () => {
        const result = operationsService.getTriangleType(35,32,35);
        expect(result).toEqual(
            operationsService.TRIANGLE_ISOSCELES
        );
    })

    it('test isosceles triangle third scenario', async () => {
        const result = operationsService.getTriangleType(32,35,35);
        expect(result).toEqual(
            operationsService.TRIANGLE_ISOSCELES
        );
    })

    it('test equilateral triangle', async () => {
        const result = operationsService.getTriangleType(35,35,35);
        expect(result).toEqual(
            operationsService.TRIANGLE_EQUILATERAL
        );
    })

    it('test scalene triangle', async () => {
        const result = operationsService.getTriangleType(5,3,4);
        expect(result).toEqual(
            operationsService.TRIANGLE_SCALENE
        );
    })
})