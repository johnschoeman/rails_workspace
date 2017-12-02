class AddSeatToBenchTable < ActiveRecord::Migration[5.1]
  def change
    add_column :benches, :num_seats, :integer, default: 0, null: false
  end
end
