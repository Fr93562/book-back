const currentDate = new Date();

const security = {
    secret: `youatj-${currentDate.getDay()}-${currentDate.getFullYear()}`,
    salt: 10,
    header: 'auth',
};