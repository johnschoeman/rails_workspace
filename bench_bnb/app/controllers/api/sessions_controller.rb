class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["No one signed in"], status: 422
    end
  end

end