class CreateCounties < ActiveRecord::Migration[6.1]
  def change
    create_table :counties do |t|
      t.string :county_code
      t.string :county_name
      t.timestamps
    end
end
end
