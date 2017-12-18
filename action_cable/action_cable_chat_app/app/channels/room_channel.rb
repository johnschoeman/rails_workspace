class RoomChannel < ApplicationCable::Channel
  include SessionsHelper
  
  def subscribed
    stream_from "room_channel"
    stream_from "room_channel_user_#{message_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
