class CreateConstituencies < ActiveRecord::Migration[6.1]
  def change
    create_table :constituencies do |t|
      t.string :constituency_code,
      t.string :constituency_name,
      t.string :county_code,
      t.timestamps
    end
  end
end
