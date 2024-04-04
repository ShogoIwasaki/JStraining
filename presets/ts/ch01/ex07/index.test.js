import { Point } from "./index.js";

describe('Point', () => {
    it('correctly adds points with positive coordinates', () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(4, 5);
      
      point1.add(point2);
  
      expect(point1.x).toBe(6);
      expect(point1.y).toBe(8);
    });
  
    it('correctly adds points with negative coordinates', () => {
      const point1 = new Point(-2, -3);
      const point2 = new Point(-4, -5);
      
      point1.add(point2);
  
      expect(point1.x).toBe(-6);
      expect(point1.y).toBe(-8);
    });
  
    it('correctly adds points with zero coordinates', () => {
      const point1 = new Point(0, 0);
      const point2 = new Point(0, 0);
      
      point1.add(point2);
  
      expect(point1.x).toBe(0);
      expect(point1.y).toBe(0);
    });
  });