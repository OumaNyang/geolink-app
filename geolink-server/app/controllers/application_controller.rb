class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  # Post county
  post '/counties' do
    county = County.create(
      county_code: params[:county_code],
      county_name: params[:county_name]
     )
    county.to_json
  end
  # Patch county
  patch  '/counties' do
  county = County.find(params[:id])
  county.update(
    county_code: params[:county_code], 
    county_name: params[:county_name]
  )
  counties = County.all
  counties.to_json
end 

   # Delete county by id
    delete '/counties/:id' do 
      county = County.find(params[:id])
      county.destroy 
      counties = County.all
      counties.to_json
 end 
  # get all counties
  get "/counties" do
    counties = County.all
    counties.to_json
  end 
  # get county by id
  get "/counties/:id" do
    county = County.find(params[:id])
    county.to_json
  end
    # get county by county code
    get "/counties/:by_code" do
      counties = County.find_by(params[:county_code])
      counties.to_json
    end

   # Post constituency
    post '/constituencies' do
    constituency = Constituency.create(
      constituency_code: params[:constituency_code],
      constituency_name: params[:constituency_name],
      county_code: params[:county_code]
     )
     constituency.to_json
  end
  # Patch constituency
  patch  '/constituencies' do
    constituency = Constituency.find(params[:id])
    constituency.update(
      constituency_code: params[:constituency_code],
      constituency_name: params[:constituency_name],
      county_code: params[:county_code]
  )
  constituencies = Constituency.all
  constituencies.to_json
end 

   # Delete constituency by id
    delete '/constituencies/:id' do 
      constituency = Constituency.find(params[:id])
      constituency.destroy 
      constituencies = Constituency.all
      constituencies.to_json
 end 
  # get all constituencies
  get "/constituencies" do
    constituencies = Constituency.all
    constituencies.to_json
  end
    # get constituency by id
    get "/constituencies/:id" do
      constituency = Constituency.find(params[:id])
      constituency.to_json
    end
end
