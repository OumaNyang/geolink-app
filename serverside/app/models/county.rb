class County < ActiveRecord::Base
    has_many :constituencies
end