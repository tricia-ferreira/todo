# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170816092016) do

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tyres", force: :cascade do |t|
    t.string "type"
    t.integer "passenger_qty", default: 0
    t.integer "motorcycle_qty", default: 0
    t.integer "agricultural_qty", default: 0
    t.integer "aircraft_qty", default: 0
    t.integer "light_truck_qty", default: 0
    t.integer "truck_qty", default: 0
    t.integer "otr_qty", default: 0
    t.integer "fourxfour_qty", default: 0
    t.integer "bale_qty", default: 0
    t.float "total_recorded_weight", default: 0.0
    t.float "shred_weight", default: 0.0
    t.float "scrap_weight", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
