
  /**
   * @entity
   */
  class StatEntity {
    page = '';
    visits= 0;
    
    constructor(stat) {
        const { page, visits } = stat;

        this.setPage(page);
        this.setVisits(visits);
    }

    // setters

    /**
     * @private
     * @param {string} page 
     */
    setPage(page) {
        this.page = page;
    }

    /**
     * @private
     * @param {integer} visits 
     */
    setVisits(visits) {
        this.visits = visits;
    }

    /**
     * @public
     * Transforme l'instance en objet javascript
     * @returns - object
     */
    toJson() {
        const stat = {
            page: this.page,
            visits: this.visits,
        };

        return stat;
    }
  }

  module.exports = StatProvider;