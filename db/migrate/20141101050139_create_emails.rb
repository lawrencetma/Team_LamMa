class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :from
      t.string :subject
      t.text   :text
      t.timestamps
    end
  end
end
