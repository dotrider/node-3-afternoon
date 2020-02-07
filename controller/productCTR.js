
module.exports = {

    create: (req, res, next) => {
        //this line allows access to postgres server
        const dbInstance = req.app.get('db');

        const {name, description, price, image_url} = req.body
        //this line will execute .sql files
        dbInstance.create_product([name, description,price,image_url]).then(() => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'Something is Wrong!'});
            console.log(err);
        });
        
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.read_product(id).then(() => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'Something is Wrong!'});
            console.log(err);
        });
    },

    getAll: (req,res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products().then(() => res.sendStatus(200) )
        .catch(err => {
            res.status(500).send({errorMessage: 'Something is Wrong!'});
            console.log(err);
        });

    },

    update: (req,res, next) => {
        const dbInstance = req.app.get('db');
        const {params,query} = req
        dbInstance.update_product([params.id, query.desc]).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something is Wrong!'});
            console.log(err);
        });
    },

    deleted: (req,res, next) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params
        dbInstance.delete_product(id).then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something is Wrong!'});
            console.log(err);
        });
    }

}