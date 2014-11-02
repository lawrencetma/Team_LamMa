class MessageController < ApplicationController

  def new
    @message = Message.new
    @messages = Message.all
  end

  def create
    message = Message.create(messages_params)
    redirect_to messagewall_path
  end

  private

  def messages_params
    params.require(:message).permit(:from, :text)
  end

end