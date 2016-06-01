require 'json'

task :bump do
	file = File.read('manifest.json')
	data_hash = JSON.parse(file)
	versions = data_hash["version"].split(".")
	versions[versions.size - 1] = (versions.last.to_i + 1).to_s
	
	data_hash["version"] = versions.join(".")

	f = File.new("manifest.json", "w")
	f.write(JSON.pretty_generate(data_hash))
	f.close()
end