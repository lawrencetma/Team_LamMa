class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :from
      t.text   :text
      t.timestamps
    end
  end
end
