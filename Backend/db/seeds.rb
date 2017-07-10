
Blog.create(title: "My First Blog", content: "This is the first blog ever", img_url: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg", date: "Jan 05, 2017")
Comment.create(text: "This is a comment", date: "Jan 08, 2017")
User.create(blog_id: 1, comment_id: 1, username: "Brett", password: "brett", password_confirmation: "brett", age: 25, gender: "M")
