class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :age
      t.string :gender

      t.references :blog, foreign_key: true
      t.references :comment, foreign_key: true
    end
  end
end
