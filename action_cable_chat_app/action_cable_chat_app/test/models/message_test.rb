# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  content    :text
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase

  def setup
    @bob = User.create(username: 'bob', password: 'password', password_confirmation: 'password')
    @message = users(:example).messages.build(content: "Lorem ipsum @bob")
  end

  test "should be valid" do
    assert @message.valid?, @message.errors.full_messages
  end

  test "should not be blank" do
    @message.content = " "
    assert !@message.valid?
  end

  test "#mentions finds the correct names" do
      assert @message.mentions.include?(@bob)
  end
end
