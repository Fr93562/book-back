/**
 * @entity
 */
 class ProjectEntity {
    name= '';
    brand= '';
    description= '';
    image= '';
    content= '';

    constructor(project) {
        this.setName(project.name);
        this.setBrand(project.brand);
        this.setDescription(project.description);
        this.setImage(project.image);
        this.setContent(project.content);
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