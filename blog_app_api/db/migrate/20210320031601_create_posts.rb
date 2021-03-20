class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string 'title'
      t.string 'context'
      t.string 'author'
    end
  end
end
