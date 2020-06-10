/**
 *  Weather API
 *
 *  Copyright 2019 Alex Lapinski
 */
metadata {
	definition (name: "Weather API", namespace: "alexlapinski.weather.api", author: "Alex Lapinski", cstHandler: true) {
		capability "Temperature Measurement"
	}


	simulator {
		// TODO: define status and reply messages here
	}

	tiles {
		// TODO: define your main and details tiles here
	}
}

// parse events into attributes
def parse(String description) {
	log.debug "Parsing '${description}'"
	// TODO: handle 'temperature' attribute

}