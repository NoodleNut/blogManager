//================================Routes===========================================//

module.exports = function(app, db) {

    //=============================== DUMMY ===========================================



    //send website all blog text
    app.get('/blogtext', function(req, res) {
        res.send(storage.values());


    });


    //send website all images

    app.get('/blogimg', function(req, res) {
        res.type('jpg');
        res.sendFile(path.join(__dirname, '../public/images', 'wtf-face.png'));
    });


    //get image data from client and save in img dir
    app.post('/img', multipartyMiddleware, function(req, res) {
        var file = req.files.file;
        console.log(file.path);


        fs.readFile(file.path, function(err, data) {
            // ...

            fs.writeFile('public/images/' + file.name, data, function(err) {

            });
        });

    });


    //get blog data from client
    app.post('/blog', function(req, res) {

        storage.setItem(req.body.title, req.body);

        res.send('thank you come again')
    });


    //sign up
    app.get('/setup', function(req, res) {

        // create a sample user
        var nick = {
            name: 'Nick Cerminara',
            password: 'password',

        };
        res.send('setup')

        db.collection('user').insert(nick);



    });




}