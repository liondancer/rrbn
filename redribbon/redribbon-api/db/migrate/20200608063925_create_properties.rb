class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.integer :user_id
      t.text :description

      t.timestamps
    end
  end
end
