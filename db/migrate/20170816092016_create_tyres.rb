class CreateTyres < ActiveRecord::Migration[5.1]
  def change
    create_table :tyres do |t|
      t.string :type
      t.integer :passenger_qty, default: 0
      t.integer :motorcycle_qty, default: 0
      t.integer :agricultural_qty, default: 0
      t.integer :aircraft_qty, default: 0
      t.integer :light_truck_qty, default: 0
      t.integer :truck_qty, default: 0
      t.integer :otr_qty, default: 0
      t.integer :fourxfour_qty, default: 0
      t.integer :bale_qty, default: 0
      t.float :total_recorded_weight, default: 0.0
      t.float :shred_weight, default: 0.0
      t.float :scrap_weight, default: 0.0

      t.timestamps
    end
  end
end
