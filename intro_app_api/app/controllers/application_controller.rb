# frozen_string_literal: true

class ApplicationController < ActionController::API
  # DON'T hardcode key argument ie 'super-secret*&^%' as this will be in source control or git.
  # Store in a variable (system variable) outside the code.
  def encode_token(user_id)
    JWT.encode(user_id, 'super-secret*&^%')
  end

  def decode_token
    auth_token = request_headers['Authorization']
    token = auth_token.split[' '] if auth_token
    p 'TOKEN'
    p token
    begin
      JWT.decode token[1], 'super-secret*&^%'
    rescue StandardError
      nil
    end
  end
end
