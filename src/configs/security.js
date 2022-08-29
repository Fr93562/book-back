const currentDate = new Date();

const security = {
    secret: `youatj-${currentDate.getDay()}-${currentDate.getFullYear()}`,
};