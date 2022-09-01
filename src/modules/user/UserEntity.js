/**
 * @entity
 */
class UserEntity {
    name = '';
    surname = '';
    job = '';
    mail = '';

    constructor(user) {
        this.setName(user.name);
        this.setUsername(user.surname);
        this.setJob(user.job);
        this.setMail(user.mail);
    }

    // setters

    /**
     * @private
     * @param {string} name 
     */
    setName(name) {
        this.name = name;
    }

    /**
     * @private
     * @param {string} username 
     */
    setUsername(surname) {
        this.surname = surname;
    }

    /**
     * @private
     * @param {string} job 
     */
    setJob(job) {
        this.job = job;
    }

    /**
     * @private
     * @param {string} mail 
     */
    setMail(mail) {
        this.mail = mail;
    }

    /**
     * @public
     * Transforme l'instance en objet javascript
     * @returns - object
     */
    toJson() {
        const user = {
            name: this.name,
            surname: this.surname,
            job: this.job,
            mail: this.mail
        };

        return user;
    } 
}

module.exports = UserEntity;