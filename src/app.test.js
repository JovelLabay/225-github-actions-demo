const { dayOfTheWeek } = require('./app');


test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('8/18/2023') );
    expect( day ).toBe('Friday');
}); 