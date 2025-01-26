package com.example.demo;

import org.apache.camel.CamelContext;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.impl.DefaultCamelContext;

public class CamelDemo {
	public static void main(String[] args) {
		// Create Camel Context
		CamelContext camelContext = new DefaultCamelContext();
		try {
			// Add routes
			camelContext.addRoutes(new RouteBuilder() {
				@Override
				public void configure() throws Exception {
					// Simple route: Reads messages from direct:start, processes them, and logs them
					from("direct:start").process(exchange -> {
						String message = exchange.getIn().getBody(String.class);
						log("Processing message: " + message);
					}).to("direct:end");

					from("direct:end").process(exchange -> log("Message successfully routed to end."));
				}
			});

			// Start the context
			camelContext.start();

			// Send a test message
			camelContext.createProducerTemplate().sendBody("direct:start", "Hello, Camel!");

			// Keep the application running to observe logs
			Thread.sleep(5000);
		} catch (Exception e) {
			log("Error occurred: " + e.getMessage());
		} finally {
			try {
				camelContext.stop();
			} catch (Exception e) {
				log("Error stopping Camel Context: " + e.getMessage());
			}
		}
	}

	// Simple logging method
	private static void log(String message) {
		System.out.println("[LOG] " + message);
	}
}
