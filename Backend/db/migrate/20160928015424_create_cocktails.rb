class CreateCocktails < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.text :title
      t.text :content
      t.string :img_url
      t.datetime :date

      t.timestamps
    end
  end
end
