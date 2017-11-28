# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bench.destroy_all

user1 = User.create(username: 'user1', password: 'password')
user2 = User.create(username: 'user2', password: 'password')
user3 = User.create(username: 'user3', password: 'password')

lat = [37.7749, 37.77, 37.78, 37.79, 37.76]
lng = [-122.3, -122.33, -122.35, -122.37, -122.4, -122.43, -122.45]
10.times do
  Bench.create(description: Faker::Lorem.sentence(1), lat: lat.sample, lng: lng.sample)
end



