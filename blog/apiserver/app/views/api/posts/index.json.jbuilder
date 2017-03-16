json.array!(@posts) do |post|
  json.extract! post, :id, :title, :categories
end
