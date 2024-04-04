import { Point } from "./index.js";

describe('Point', () => {
    it('result point1.x => 6, result point1.x => 8 | when point1(2, 3) point2(4, 5) given', () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(4, 5);
      
      point1.add(point2);
  
      expect(point1.x).toBe(6);
      expect(point1.y).toBe(8);
    });
  
    it('result point1.x => -6, result point1.x => -8 | when point1(-2, -3) point2(-4, -5) given', () => {
      const point1 = new Point(-2, -3);
      const point2 = new Point(-4, -5);
      
      point1.add(point2);
  
      expect(point1.x).toBe(-6);
      expect(point1.y).toBe(-8);
    });
  
    it('result point1.x => 0, result point1.x => 0 | when point1(0, 0) point2(0, 0) given', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(0, 0);
      
      point1.add(point2);
  
      expect(point1.x).toBe(0);
      expect(point1.y).toBe(0);
    });
  });