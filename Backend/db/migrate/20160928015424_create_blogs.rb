class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.text :title
      t.text :content
      t.string :img_url
      t.integer :user_id

      t.timestamps
    end
  end
end
