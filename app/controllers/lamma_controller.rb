class LammaController < ApplicationController

  def welcome
  end

  def thecouple
  end

  def theproposal
  end

  def helen
  end

  def lawrence
  end

  def weddinginformation
  end

  def weddingparty
  end

  def accomodations
  end

  def messagewall
    @message = Message.new
    list = Message.all
    @messages = list.reverse
  end

  def contact
  end

  def registry
  end

  def email
  end

end