const pass = 'mongodb+srv://Andreshih:@andre091020699@cluster0-02x9u.mongodb.net/test?retryWrites=true'


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const todoRoutes = express.Router();
const postRoutes = express.Router();
const PORT = 4000;

let Todo = require('./models/todo');
let Post = require('./models/post');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(pass, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, post) {
        res.json(post);
    });
});

postRoutes.route('/update/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else
            post.post_date = req.body.post_date;
            post.post_author = req.body.post_author;
            post.post_title = req.body.post_title;
            post.post_content = req.body.post_content;
            post.post_pic_link = req.body.post_pic_link;

            post.save().then(post => {
                res.json('Post updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

// 刪除
postRoutes.route('/delete/:id').delete(function(req, res) {
    Post.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).send(err);
        const response = {
            message: "Post successfully deleted",
            id: req.params.id
        };
        return res.status(200).send(response);
    });
});

app.use('/posts', postRoutes);


// todoRoutes.route('/').get(function(req, res) {
//     Todo.find(function(err, todos) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(todos);
//         }
//     });
// });

// todoRoutes.route('/:id').get(function(req, res) {
//     let id = req.params.id;
//     Todo.findById(id, function(err, todo) {
//         res.json(todo);
//     });
// });

// todoRoutes.route('/update/:id').post(function(req, res) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (!todo)
//             res.status(404).send("data is not found");
//         else
//             todo.todo_description = req.body.todo_description;
//             todo.todo_responsible = req.body.todo_responsible;
//             todo.todo_priority = req.body.todo_priority;
//             todo.todo_completed = req.body.todo_completed;

//             todo.save().then(todo => {
//                 res.json('Todo updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

// todoRoutes.route('/add').post(function(req, res) {
//     let todo = new Todo(req.body);
//     todo.save()
//         .then(todo => {
//             res.status(200).json({'todo': 'todo added successfully'});
//         })
//         .catch(err => {
//             res.status(400).send('adding new todo failed');
//         });
// });

// // 刪除
// todoRoutes.route('/delete/:id').delete(function(req, res) {
//     Todo.findByIdAndRemove(req.params.id, (err) => {
//         if (err) return res.status(500).send(err);
//         const response = {
//             message: "Todo successfully deleted",
//             id: req.params.id
//         };
//         return res.status(200).send(response);
//     });
// });

// app.use('/todos', todoRoutes);



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});