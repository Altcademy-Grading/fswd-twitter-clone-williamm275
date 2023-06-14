class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def userpage
    @data = { username: params[:username] }.to_json
    render 'userFeedPage'
  end
end