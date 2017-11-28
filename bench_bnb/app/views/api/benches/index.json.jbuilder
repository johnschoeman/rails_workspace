json.by_id do
  @benches.each do |bench|
    json.set! bench.id do 
      json.partial! "api/benches/bench", bench: bench
    end
  end
end

json.all_ids do
  json.array! @benches.map { |bench| bench.id }
end