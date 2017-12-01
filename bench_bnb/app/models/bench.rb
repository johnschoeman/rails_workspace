# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord
  validates :lat, :lng, presence: true
  validates :description, length: {minimum: 6}

  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  def self.in_bounds(bounds)
    latRange = Range.new(bounds["southWest"]["lat"].to_f, bounds["northEast"]["lat"].to_f)
    lngRange = Range.new(bounds["southWest"]["lng"].to_f, bounds["northEast"]["lng"].to_f)
    self.where(lat: latRange, lng: lngRange)
  end
end
