
user = User.create(username: "Brett", name: "brett", password: "brett", password_confirmation: "brett", age: 25, gender: "M")
blog = Blog.create( user_id: user.id, title: "My First Blog", content: "This is the first blog ever", img_url: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg")
comment = Comment.create(user_id: user.id, blog_id: blog.id, text: "This is a comment")



names = ["bob", "mike", "emily", "matt", "eric", "jess" ]
blogs = ["First Blog", "Second Blog", "Third Blog", "Fourth Blog"]
comments = ["Comment One", "Comment Two", "Comment Three", "Comment Five"]


names.each {|n| User.create(username: n, name: n, password: n, password_confirmation: n, age: 40, gender: "M")}
blogs.each_with_index {|b, i| Blog.create(title: b, content: b, user_id: i, img_url: "http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg")}
comments.each_with_index {|c, i| Comment.create(user_id: i, blog_id: i, text: c)}
