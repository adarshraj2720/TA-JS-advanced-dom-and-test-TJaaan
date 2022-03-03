const {getFullName,getCircumference,getArea}= require('./index')

test('getFullName', () => {
    expect(getFullName("Adarsh", "Raj")).toBe("AdarshRaj");
  });

  test('getCirumference', () => {
    expect(getCircumference(10)).toBe('The circumfernce is  62.83185307179586');
  });

  test('getArea', () => {
    expect(getArea(10)).toBe('The area is 314.1592653589793');
  });