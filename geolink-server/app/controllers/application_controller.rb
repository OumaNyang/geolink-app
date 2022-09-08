class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"
    
    get '/counties' do
      counties = County.all
      counties.to_json
    end
    
    get '/counties/:id' do
      bakery = County.find(params[:id])
      bakery.to_json(include: :constituencies)
    end
 end
  