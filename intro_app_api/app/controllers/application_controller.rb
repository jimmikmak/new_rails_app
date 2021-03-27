# frozen_string_literal: true

class ApplicationController < ActionController::API
  def encode_token(user_id)
    JWT.encode(user_id, 'super-secret*&^%')
  end

  def decode_token; end
end
