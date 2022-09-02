/**
 * @entity
 */
class SideEntity {
    name= '';
    date= '';
    description= '';
    image= '';
    content= '';

    constructor(side) {
        this.setName(side.name);
        this.setDate(side.date);
        this.setDescription(side.description);
        this.setImage(side.image);
        this.setContent(side.content);
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
     * @privates
     * @param {string} date 
     */
    setDate(date) {
        this.date= date;
    }

    /**
     * @private
     * @param {string} description 
     */
    setDescription(description) {
        this.description = description;
    }

    /**
     * @private
     * @param {string} image 
     */
    setImage(image) {
        this.image = image;
    }

    /**
     * @private
     * @param {string} content 
     */
    setContent(content) {
        this.content = content;
    }

    /**
     * @public
     * Transforme l'instance en objet javascript
     * @returns - object
     */
    toJson() {
        const side = {
            name: this.name,
            date: this.date,
            description: this.description,
            image: this.image,
            content: this.content,
        };

        return side;
    }
}

module.exports = SideEntity;