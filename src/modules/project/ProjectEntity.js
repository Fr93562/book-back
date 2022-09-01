/**
 * @entity
 */
 class ProjectEntity {
    name= '';
    brand= '';
    description= '';
    image= '';
    content= '';

    constructor(side) {
        const { name, brand, description, image, content } = side;

        this.setName(name);
        this.setBrand(brand);
        this.setDescription(description);
        this.setImage(image);
        this.setContent(content);
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
    setBrand(brand) {
        this.brand= brand;
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
            brand: this.brand,
            description: this.description,
            image: this.image,
            content: this.content,
        };

        return side;
    }
}

module.exports = ProjectEntity;