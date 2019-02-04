// BEGIN (write your solution here)
export const getQuadrant = (point) => {
    const x = getX(point);
    const y = getY(point);
    if (x > 0 && y > 0) {
        return 1;
    }
    if (x < 0 && y > 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x > 0 && y < 0) {
        return 4;
    }
    return null;
};

export const getSymmetricalPoint = (point) => {
    return makePoint(-getX(point), -getY(point));
}

export const calculateDistance = (point1, point2) => {
    const subX = getX(point2) - getX(point1);
    const subY = getY(point2) - getY(point1);
    return Math.sqrt((subX ** 2) + (subY ** 2));
}